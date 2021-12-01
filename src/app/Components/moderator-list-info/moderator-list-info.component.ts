import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { moderInfo } from "./moderList.model";



@Component({
  selector: 'app-moderator-list-info',
  templateUrl: './moderator-list-info.component.html',
  styleUrls: ['./moderator-list-info.component.css']
})
export class ModeratorListInfoComponent implements OnInit {

  public info: moderInfo[];
  isAscendic = true;
  public filteredModers: moderInfo[];
  isFiltered = false;



  constructor(public auth: AuthService, private router: Router) { }

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

  editModer(id){
    this.router.navigate([`moderator/edit/${id}`]);
  }

  sortModer(){
    this.isAscendic?this.ascendic():this.descendic()
  }

  ascendic(){
    this.isAscendic = false;
    this.info = this.info.sort((n1,n2) => {
      if (n1.nickname < n2.nickname) {
        return 1;
      }
      if (n1.nickname > n2.nickname) {
        return -1;
      }
      return 0;
    });
  }

  descendic(){
    this.isAscendic = true
    this.info = this.info.sort((n1,n2) => {
      if (n1.nickname > n2.nickname) {
        return 1;
      }
      if (n1.nickname < n2.nickname) {
        return -1;
      }
      return 0;
    });
  }
  appendObjTo(thatArray, newObj) {
    const frozenObj = Object.freeze(newObj);
    return Object.freeze(thatArray.concat(frozenObj));
  }

  activeModers(){

    if(this.isFiltered==false) {
      for (let i = 0; i < this.info.length; i++) {
        if (this.info[i].isactive == true) {
          this.filteredModers.push(this.info[i]);
        }
      }
      this.isFiltered = true;

    }
    else{
      this.isFiltered = false;
    }

}



}



