import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator} from "../registration/confirmed.validator";
import {AuthService} from "../auth/auth.service";


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
  alertClass: string

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      doubleCheckPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('newPassword', 'doubleCheckPass')
    })

  }

  statusCheck(value: any) {
    this.success = true
    if (value == 200) {
      this.message = "Password changed successful"
      this.alertClass = "alert-success"
    } else if (value == 417) {
      this.message = "Invalid password"
      this.alertClass = "alert-danger"
    } else {
      this.message = "Error"
      this.alertClass = "alert-danger"
    }

  }

  removeDoubleCheckPass(value: any) {
    delete value['doubleCheckPass']
    return value
  }

  submit() {
    this.success = false
    this.auth.changePassword(this.removeDoubleCheckPass(this.form.value)).subscribe(
      response => this.statusCheck(response.status),
      error => {
        this.statusCheck(error.status)
      }
    );
  }
}
