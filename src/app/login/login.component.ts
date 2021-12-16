import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import{Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  title = 'Sign In'
  error = false;
  success = false;
  message: string;
  alertClass: string;

  isError: Boolean = false;

  form: FormGroup = new FormGroup({});
  sSub: Subscription

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {}

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnDestroy() {
    if(this.sSub){
      this.sSub.unsubscribe()
    }
  }

  statusCheck(value: any) {
    this.success = true
    if (value == 200) {
      this.message = "Authorization successful"
      this.alertClass = "alert-success"
    } else if (value == 204) {
      this.message = "Fall captcha"
      this.alertClass = "alert-danger"
    } else {
      this.message = "System error"
      this.alertClass = "alert-danger"
    }
  }

  isSuccess() {
    this.success = false;
  }

  submit(){
    this.sSub = this.auth.loginUser(this.form.value)
      .subscribe(
        ()=>
        {
          switch(this.auth.getRole()) {
            case  "ROLE_CONFIRMED": {
              this.router.navigate(['/main'])
              break
            }
            case "ROLE_ADMIN": {
              this.router.navigate(['/moderator'])
              break
            }
            case "ROLE_MODERATOR": {
              this.router.navigate(['/ingredients'])
              break
            }
          }
        },
        error => this.statusCheck(error.status)
      )
  }
}

