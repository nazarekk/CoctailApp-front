import { Component, OnInit } from '@angular/core';
import {UserInfoComponent} from "../user-info/user-info.component";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
  viewProviders:[UserInfoComponent]
})
export class ToolBarComponent implements OnInit {
  authService: AuthService;
  getUserInfo(){
    this.authService.getUserInfo().subscribe(res => console.log(res));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
