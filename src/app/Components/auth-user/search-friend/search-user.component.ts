import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {UserInfo} from "./user-model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit, OnDestroy {

  searchValue: string;
  friends: UserInfo[];
  friendsSubscription: Subscription;
  serverResponse: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.searchValue = "";
    this.friendsSubscription = this.authService.searchFriend("").subscribe((data: UserInfo[]) => this.friends = data);
  }

  ngOnDestroy() {
    this.friendsSubscription.unsubscribe();
    this.serverResponse.unsubscribe();
  }

  search(searchValue) {
    this.friendsSubscription.unsubscribe();
    this.searchValue = searchValue;
    this.friendsSubscription = this.authService.searchFriend(searchValue).subscribe((data: UserInfo[]) => this.friends = data);
  }

  addFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.addFriend(user.id).subscribe(data => this.refreshList(data));
  }

  acceptFriend(user: UserInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.authService.acceptFriend(user.id).subscribe(data => this.refreshList(data));
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
    if (data == true) {
      this.friendsSubscription.unsubscribe();
      this.authService.searchFriend(this.searchValue).subscribe(
        (data: UserInfo[]) => this.friends = data);
    }
  }

}
