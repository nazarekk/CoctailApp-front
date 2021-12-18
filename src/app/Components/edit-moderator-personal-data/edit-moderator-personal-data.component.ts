import {Component, OnInit} from '@angular/core';
import {moderInfo} from "../moderator-list-info/moderList.model";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {UserPhoto} from "../../Interfaces/UserPhoto";


@Component({
  selector: 'app-edit-moderator-personal-data',
  templateUrl: './edit-moderator-personal-data.component.html',
  styleUrls: ['./edit-moderator-personal-data.component.css']
})
export class EditModeratorPersonalDataComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  success:boolean;
  imagesUrl = 'https://imgur.com/';
  strJpg = '.jpg';
  alert: Boolean = false;
  displayText: String;

  userPhoto: UserPhoto = new class implements UserPhoto {
    photo: string;
    images: string[] = ['q85KyJf', 'L0jEADr', 'iRNFeLz', '48fMXZy', 'iCJ6akK', 'cdKlwx7',
      'UpwOuBN', 'n8X1XmE', '8U7Ps9x', 'kRM7qpY', 'c02axhC', 'c4sLhHI']
  };

  editModeratorForm = this.formBuilder.group({
    userid: ['', [Validators.required]],
    email: ['', [Validators.required]],
    nickname: ['', [Validators.required]],
    isActive: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  info: moderInfo;
  moderID = parseInt(this.route.snapshot.paramMap.get('id')!);

  constructor(public auth: AuthService, public route: ActivatedRoute, public formBuilder: FormBuilder) { }

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
          data.isActive,
          data.image
        );
        this.editModeratorForm.setValue(this.info);
      });

  }

  onSubmit() {
    this.info = this.editModeratorForm.value;
    this.auth.editModerator(this.info).subscribe(()=>{
        this.alert = true;
        this.displayText = "Information was successfully changed!";
      },
      ()=>{
        this.alert = true;
        this.displayText = "Error";
      });
  }

  submitPhoto() {
    this.editModeratorForm.value.image = this.userPhoto.photo;
    this.info.image = this.userPhoto.photo;

  }



  selectPhoto(photo: string) {
    this.userPhoto.photo = photo;
    this.isSuccess();

  }

  isSuccess() {
    this.success = false;
  }





}
