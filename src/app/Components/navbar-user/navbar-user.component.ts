import { Component} from '@angular/core';
import {SearchfriendComponent} from "../../searchfriend/searchfriend.component";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css'],
  viewProviders: [SearchfriendComponent]
})
export class NavbarUserComponent {

  searchValue: string;

  constructor() {
  }

  search() {
    console.log(this.searchValue);
  }

  logout() {
    AuthService.logout();
  }

}
