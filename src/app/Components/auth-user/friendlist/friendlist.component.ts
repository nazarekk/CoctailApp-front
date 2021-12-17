import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserInfo} from "../search-friend/user-model";
import {AuthService} from "../../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit,OnDestroy {

  friends: UserInfo[];
  friendSubscription: Subscription;
  serverResponse: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.friendSubscription = this.authService.friendList().subscribe(
      (data: UserInfo[]) => this.friends = data);
  }

  ngOnDestroy() {
    this.friendSubscription.unsubscribe();
    this.serverResponse.unsubscribe();
  }

  addFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined))  this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.addFriend(user.id).subscribe(data => this.refreshList(data));
  }

  acceptFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.authService.acceptFriend(user.id).subscribe(data => this.refreshList(data));
  }

  declineFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.declineFriend(user.id).subscribe(data => this.refreshList(data));
  }

  removeFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.removeFriend(user.id).subscribe(data => this.refreshList(data));
  }

  subscribeFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.subscribeFriend(user.id).subscribe(data => this.refreshList(data));
  }

  unsubscribeFriend(id: number) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.unsubscribeFriend(id).subscribe(data =>
      this.refreshList(data))
  }

  refreshList(data) {
    this.friendSubscription.unsubscribe();
    if (data == true) this.friendSubscription = this.authService.friendList().subscribe(
      (data: UserInfo[]) => this.friends = data);
  }

  discover() {
    location.href = "searchfriend";
  }

}
