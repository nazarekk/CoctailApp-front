import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from "../user-model";

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit{

  ngOnInit(): void {
  }

  @Input() friends: UserInfo[]

}
