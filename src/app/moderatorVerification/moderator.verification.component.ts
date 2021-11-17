import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ConfirmedValidator } from './confirmed.validator';
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-moderator-verification',
  templateUrl: './moderator.verification.component.html',
  styleUrls: ['./moderator.verification.component.css']
})
export class ModeratorVerificationComponent implements OnInit{

  title = 'Moderator verification'
  sSub: Subscription
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}


  ngOnInit(){
    this.form = this.fb.group({
      nickname: ['', [Validators.required]],
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
    console.log(this.removeDoubleCheckPass(this.removeDoubleCheckPass(this.form.value)))
    this.auth.verificateModerator(this.form.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }

}
