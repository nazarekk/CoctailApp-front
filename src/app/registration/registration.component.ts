import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ConfirmedValidator} from './confirmed.validator';
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  title = 'Sign Up'

  form: FormGroup = new FormGroup({});
  isError: Boolean = false;
  alertText: String;
  sSub: Subscription

  constructor(private fb: FormBuilder,
              private auth: AuthService) {
  }


  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      doubleCheckPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'doubleCheckPass')
    })

  }

  removeDoubleCheckPass(value: any) {
    delete value['doubleCheckPass']
    return value
  }

  submit() {
    this.sSub = this.auth.registerUser(this.removeDoubleCheckPass(this.form.value))
      .subscribe(
        () => {
        },
        err => {
          if (err.status == 417) {
            this.isError = true;
            this.alertText = "Incorrect password"
          }
          if (err.status == 500) {
            this.isError = true;
            this.alertText = "User with this email is already created"
          }
        }
      )
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe()
    }
  }
}
