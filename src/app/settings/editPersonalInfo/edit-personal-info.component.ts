import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {UserPersonalInfo} from "../UserPersonalInfo";


@Component({
  selector: 'app-edit',
  templateUrl: './editPersonalInfo.component.html',
  styleUrls: ['./editPersonalInfo.component.css']
})

export class EditPersonalInfoComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  success : boolean;
  message : string;
  alertClass : string;

  constructor(private auth: AuthService,
              private fb: FormBuilder
  ) {
  }


  user:UserPersonalInfo;

  ngOnInit() {
    this.auth.getInformation()
      .subscribe((data:UserPersonalInfo) => this.user = data)

    this.form = this.fb.group({
      nickname: ['',[Validators.minLength(4),Validators.maxLength(30),Validators.required]],
      information: ['']
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

  submit() {
    this.auth.changeInfo(this.form.value).subscribe(response => {this.statusCheck(response.status)},
      error => this.statusCheck(error.status))
  }


}
