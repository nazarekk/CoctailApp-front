import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInfo} from "../user-model";

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit{

  ngOnInit(): void {
  }

  @Output() addFriendEvent = new EventEmitter();
  @Output() acceptFriendEvent = new EventEmitter();
  @Output() declineFriendEvent = new EventEmitter();
  @Output() removeFriendEvent = new EventEmitter();
  @Output() subscribeFriendEvent = new EventEmitter();
  @Output() unsubscribeFriendEvent = new EventEmitter();
  @Input() friends: UserInfo[];

  addFriend (users: UserInfo) {
    this.addFriendEvent.emit(users);
  }

  acceptFriend (users: UserInfo) {
    this.acceptFriendEvent.emit(users);
  }

  declineFriend (users: UserInfo) {
    this.declineFriendEvent.emit(users);
  }

  removeFriend (users: UserInfo) {
    this.removeFriendEvent.emit(users);
  }

  subscribeFriend (users: UserInfo) {
    this.subscribeFriendEvent.emit(users);
  }

  unsubscribeFriend (id: Number) {
    this.unsubscribeFriendEvent.emit(id);
  }

}
