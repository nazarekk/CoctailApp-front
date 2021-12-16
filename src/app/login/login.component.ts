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
        err=> {
          if (err.status == 404) this.isError = true;
        }
      )
  }
}

