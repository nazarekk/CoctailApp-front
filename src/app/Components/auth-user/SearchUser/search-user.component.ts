import {Component, Input, Output} from '@angular/core';
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
    console.log(searchValue);
    this.authService.searchFriend(searchValue).subscribe(data => this.friends = data);
  }

  logout() {
    AuthService.logout();
  }

}
