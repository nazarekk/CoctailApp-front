import {Component} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Sign In'

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private auth: AuthService) {

    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit(){
    this.auth.loginUser(this.form.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
