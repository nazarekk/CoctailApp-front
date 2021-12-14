import {Component, OnInit} from '@angular/core';
import { moderInfo } from "../moderator-list-info/moderList.model";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-edit-moderator-personal-data',
  templateUrl: './edit-moderator-personal-data.component.html',
  styleUrls: ['./edit-moderator-personal-data.component.css']
})
export class EditModeratorPersonalDataComponent implements OnInit {

  checkboxValue:boolean;

  editModeratorForm = this.formBuilder.group({
    userid: ['', [Validators.required]],
    email: ['', [Validators.required]],
    nickname: ['', [Validators.required]],
    isActive: ['', [Validators.required]],
  });

  public info: moderInfo;
  moderID = parseInt(this.route.snapshot.paramMap.get('id')!);

  constructor(public auth: AuthService, public route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setInfo();

  }

  setInfo() {
    this.auth
      .getInfoById(this.moderID)
      .subscribe((data: moderInfo) => {
        this.info = new moderInfo(
          this.moderID.toString(),
          data.nickname,
          data.email,
          data.isActive
        );
        this.editModeratorForm.setValue(this.info);
        console.log('Data requested ...');
        console.log(this.info);
      });

  }

  saveChanges(){
    console.log(this.info.nickname);
    this.auth.editModerator(this.info);
  }

  onSubmit() {
    this.info = this.editModeratorForm.value;
    this.auth.editModerator(this.info).subscribe();
  }



}
