import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {UserPersonalInfo} from "../../Interfaces/UserPersonalInfo";
import {UserPhoto} from "../../Interfaces/UserPhoto";


@Component({
  selector: 'app-edit',
  templateUrl: './editPersonalInfo.component.html',
  styleUrls: ['./editPersonalInfo.component.css']
})

export class EditPersonalInfoComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  success:boolean;
  message: string;
  alertClass: string;
  imagesUrl = 'https://imgur.com/';
  strJpg = '.jpg';

  constructor(private auth: AuthService,
              private fb: FormBuilder
  ) {
  }


  user: UserPersonalInfo;

  userPhoto: UserPhoto = new class implements UserPhoto {
    photo: string;
    images: string[] = ['q85KyJf', 'L0jEADr', 'iRNFeLz', '48fMXZy', 'iCJ6akK', 'cdKlwx7',
      'UpwOuBN', 'n8X1XmE', '8U7Ps9x', 'kRM7qpY', 'c02axhC', 'c4sLhHI']
  };

  ngOnInit() {
    this.auth.getInformation()
      .subscribe((data: UserPersonalInfo) => this.user = data)

    this.form = this.fb.group({
      nickname: ['', [Validators.minLength(4), Validators.maxLength(30), Validators.required]],
      information: [''],
    })
  }

  statusCheck(value: any) {
    this.success = true
    if (value == 200) {
      this.message = "Date change successful"
      this.alertClass = "alert-success"
    } else if (value == 417) {
      this.message = "This username is already taken"
      this.alertClass = "alert-danger"
    } else {
      this.message = "System error"
      this.alertClass = "alert-danger"
    }

  }

  isSuccess() {
    this.success = false;
  }


  selectPhoto(photo: string) {
    this.userPhoto.photo = photo;
    this.isSuccess();
  }

  submitPhoto() {
    this.user.photo = this.userPhoto.photo;
    this.auth.changePhoto(this.userPhoto).subscribe(response => {
      this.statusCheck(response.status)
    },
      error => this.statusCheck(error.status))
  }


  submit() {
    this.auth.changeInfo(this.form.value).subscribe(response => {
        this.statusCheck(response.status)
      },
      error => this.statusCheck(error.status))
  }


}
