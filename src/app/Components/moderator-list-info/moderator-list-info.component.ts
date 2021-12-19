import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {moderInfo} from "./moderList.model";


@Component({
  selector: 'app-moderator-list-info',
  templateUrl: './moderator-list-info.component.html',
  styleUrls: ['./moderator-list-info.component.css']
})
export class ModeratorListInfoComponent implements OnInit {

  info: moderInfo[];
  isAscendic = true;
  filteredModers: moderInfo[] = [];
  isFiltered = false;


  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchIssues();

  }

  fetchIssues() {
    this.auth
      .getModerInfo()
      .subscribe((data: moderInfo[]) => {
        this.info = data;
      });
  }

  deleteModer(moder) {
    this.auth.deleteModer(moder).subscribe();
  }

  editModer(id) {
    this.router.navigate([`moderator/edit/${id}`]);
  }

  sortModer() {
    this.isAscendic ? this.ascendic() : this.descendic()
  }

  ascendic() {
    this.isAscendic = false;
    this.info = this.info.sort((n1, n2) => {
      if (n1.nickname < n2.nickname) {
        return 1;
      }
      if (n1.nickname > n2.nickname) {
        return -1;
      }
      return 0;
    });
  }

  descendic() {
    this.isAscendic = true
    this.info = this.info.sort((n1, n2) => {
      if (n1.nickname > n2.nickname) {
        return 1;
      }
      if (n1.nickname < n2.nickname) {
        return -1;
      }
      return 0;
    });
  }


  activeModers() {
    this.filteredModers = [];
    for (let user of this.info) {
      if (user.isActive === true) this.filteredModers.push(user)
    }
    this.isFiltered = true;
  }

  showAll() {
    this.fetchIssues();
    this.isFiltered = false;
  }

  createNew() {
    this.router.navigate([`moderator`]);
  }

}



