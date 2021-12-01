import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInfo} from "../user-model";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchValue: string;
  friends: UserInfo[];
  @Output() logoutEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search(searchValue) {
    this.searchEvent.emit(searchValue)
  }

  logout() {
    this.logoutEvent.emit();
  }

}
