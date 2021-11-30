import { Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar-kitchenware',
  templateUrl: './navbar-kitchenware.component.html',
  styleUrls: ['./navbar-kitchenware.component.css'],
})

export class NavbarKitchenwareComponent {

  searchValue: string;

  constructor() {
  }

  logout() {
    AuthService.logout();
  }

}
