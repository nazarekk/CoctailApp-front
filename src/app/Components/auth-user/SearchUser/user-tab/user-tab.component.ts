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

  addFriend (id: Number) {
    this.addFriendEvent.emit(id);
  }

  acceptFriend (id: Number) {
    this.acceptFriendEvent.emit(id);
  }

  declineFriend (id: Number) {
    this.declineFriendEvent.emit(id);
  }

  removeFriend (id: Number) {
    this.removeFriendEvent.emit(id);
  }

  subscribeFriend (id: Number) {
    this.subscribeFriendEvent.emit(id);
  }

  unsubscribeFriend (id: Number) {
    this.unsubscribeFriendEvent.emit(id);
  }

}
