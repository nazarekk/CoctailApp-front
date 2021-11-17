import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import{Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  title = 'Sign In'

  form: FormGroup = new FormGroup({});
  sSub: Subscription

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

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
        ()=>this.router.navigate(['/moderator']),
        err=>console.log(err)
      )
  }
}

