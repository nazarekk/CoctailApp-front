import { Component} from '@angular/core';
// import {SearchfriendComponent} from "../../searchfriend/searchfriend.component";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar-moderator',
  templateUrl: './navbar-moderator.component.html',
  styleUrls: ['./navbar-moderator.component.css'],
  // viewProviders: [SearchfriendComponent]
})

export class NavbarModeratorComponent {

  searchValue: string;

  constructor() {
  }

  // search() {
  //   console.log(this.searchValue);
  // }

  logout() {
    AuthService.logout();
  }

}
