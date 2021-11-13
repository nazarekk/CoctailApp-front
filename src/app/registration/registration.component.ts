import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { ConfirmedValidator } from './confirmed.validator';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  title = 'Sign Up'

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private auth: AuthService) {

    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      doubleCheckPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'doubleCheckPass')
    })
  }

  removeDoubleCheckPass(value:any){
    delete value['doubleCheckPass']
    return value
  }

  submit(){
    this.auth.registerUser(this.removeDoubleCheckPass(this.form.value))
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }

}
