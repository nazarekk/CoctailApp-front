import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator} from "../registration/confirmed.validator";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../environments/environment";



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  title = 'Settings'


  constructor(private fb: FormBuilder,
              private auth: AuthService,
             ) {
  }

  form: FormGroup = new FormGroup({});
  success = false
  message: string
  alertClass : string
  href:string

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      doubleCheckPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'doubleCheckPass')
    })

  }
  statusCheck(value: any) {
    this.success = true
    if (value == 200) {
      this.message = "Password changed successful"
      this.alertClass = "alert-success"
    }
    else {
      this.message = "Invalid password"
      this.alertClass = "alert-danger"
    }

  }

  jsonPassword(value:any){
    return value
  }

  search () {
    location.href = environment.frontUrl + "/searchfriend";
  }

  submit(){
    this.success = false
      this.auth.changePassword(this.jsonPassword(this.form.value)).subscribe(
        response => this.statusCheck(response.status)
      );
  }
}
