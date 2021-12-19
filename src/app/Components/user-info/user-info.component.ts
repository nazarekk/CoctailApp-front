import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {userInfo} from "../../user-profile/userProfile.model";
import {AuthService} from "../../auth/auth.service";
import {moderInfo} from "../moderator-list-info/moderList.model";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  userinfo: userInfo;

  ngOnInit(): void {
    this.fetchIssues()
  }
  fetchIssues() {
    this.auth
      .getUserInfo()
      .subscribe((data: userInfo) => {
        this.userinfo = data;
        console.log('Data requested ...');
        console.log(this.userinfo);
      });
  }

  friendsList(){
    this.router.navigate([`/searchfriend`]);
  }
}
