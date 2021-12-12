import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {UserInfo} from "./user-model";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {

  searchValue: string;
  friends: UserInfo[];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.searchValue = "";
    this.authService.searchFriend("").subscribe((data: UserInfo[]) => this.friends = data);
    console.log(this.friends);
  }

  search(searchValue) {
    this.searchValue = searchValue;
    this.authService.searchFriend(searchValue).subscribe((data: UserInfo[]) => this.friends = data);
    console.log(this.friends);
  }

  logout() {
    AuthService.logout();
  }

  addFriend(user: UserInfo) {
    this.authService.addFriend(user.id).subscribe(data => this.refreshList(data));
  }

  acceptFriend(user: UserInfo) {
    this.authService.acceptFriend(user.id).subscribe(data => this.refreshList(data));
  }

  declineFriend(user: UserInfo) {
    this.authService.declineFriend(user.id).subscribe(data => this.refreshList(data));
  }

  removeFriend(user: UserInfo) {
    this.authService.removeFriend(user.id).subscribe(data => this.refreshList(data));
  }

  subscribeFriend(user: UserInfo) {
    this.authService.subscribeFriend(user.id).subscribe(data => this.refreshList(data));
  }

  unsubscribeFriend(user: UserInfo) {
    this.authService.unsubscribeFriend(user.id).subscribe(data =>
      this.refreshList(data))
  }

  refreshList(data) {
    if (data == true) this.authService.searchFriend(this.searchValue).subscribe(
      (data: UserInfo[]) => this.friends = data);
  }

}
