import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { AuthService } from "../../auth/auth.service";
import { moderInfo } from "../../moderList.model";



@Component({
  selector: 'app-moderator-list-info',
  templateUrl: './moderator-list-info.component.html',
  styleUrls: ['./moderator-list-info.component.css']
})
export class ModeratorListInfoComponent implements OnInit {

  public info: moderInfo[];

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.fetchIssues();
  }

  fetchIssues() {
    this.auth
      .getModerInfo()
      .subscribe((data: moderInfo[]) => {
      this.info = data;
      console.log('Data requested ...');
      console.log(this.info);
      });
  }

  deleteModer(id){
    this.auth.deleteModer(id).subscribe(() => {
      this.fetchIssues();
    });
  }

  /*editModer(id){
    this.router.navigate([`moderator/edit/${id}`]);
  }*/
}

