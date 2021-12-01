import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInfo} from "../../../auth-user/SearchUser/user-model";
import {IngrInfo} from "../IngredientModel";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() logoutEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search(searchValue: String) {
    this.searchEvent.emit(searchValue)
  }

  goIngr () {
    location.href= environment.frontUrl + "/ingredients";
  }

  logout() {
    this.logoutEvent.emit();
  }
}
