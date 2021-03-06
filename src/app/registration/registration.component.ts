import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ConfirmedValidator} from './confirmed.validator';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Sign Up'

  form: FormGroup = new FormGroup({});
  isError: Boolean = false;
  alertText: String;

  constructor(private fb: FormBuilder,
              private auth: AuthService) {
  }


  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      doubleCheckPass: ['', [Validators.required, Validators.minLength(9)]]
    }, {
      validator: ConfirmedValidator('password', 'doubleCheckPass')
    })

  }

  removeDoubleCheckPass(value: any) {
    delete value['doubleCheckPass']
    return value
  }

  submit() {
    this.auth.registerUser(this.removeDoubleCheckPass(this.form.value))
      .subscribe(
        data => {
          location.href = "/login"
        },
        err => {
          this.isError = true;
          this.alertText = "User with this email is already created"
        }
      )
  }
}
