import {Component} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {UserInfo} from "./user-model";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent {

  searchValue: string;
  friends: UserInfo[];

  constructor(private authService: AuthService) {
  }

  search(searchValue) {
    this.authService.searchFriend(searchValue).subscribe((data: UserInfo[]) => this.friends = data);
    console.log(this.friends);
  }

  logout() {
    AuthService.logout();
  }

  addFriend(id: Number) {
    this.authService.addFriend(id).subscribe(data => console.log(data));
  }

  acceptFriend(id: Number) {
    this.authService.acceptFriend(id).subscribe(data => console.log(data));
  }

  declineFriend(id: Number) {
    this.authService.declineFriend(id).subscribe(data => console.log(data));
  }

  removeFriend(id: Number) {
    this.authService.removeFriend(id).subscribe(data => console.log(data));
  }

  subscribeFriend(id: Number) {
    this.authService.subscribeFriend(id).subscribe(data => console.log(data));
  }

  unsubscribeFriend(id: Number) {
    this.authService.unsubscribeFriend(id).subscribe(data => console.log(data));
  }

}
