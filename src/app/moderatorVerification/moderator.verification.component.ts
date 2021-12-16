import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ConfirmedValidator } from './confirmed.validator';
import {AuthService} from "../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-moderator-verification',
  templateUrl: './moderator.verification.component.html',
  styleUrls: ['./moderator.verification.component.css']
})
export class ModeratorVerificationComponent implements OnInit{

  title = 'Moderator verification'
  verificationCode: string
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

  addVerificationCode(value:any){
    this.route.queryParams
      .subscribe(params => {
          this.verificationCode = params.verificationCode
          value["verificationCode"] = this.verificationCode
        }
      );
    return value;
  }

  submit(){
    this.auth.verificationModerator(this.addVerificationCode(this.removeDoubleCheckPass(this.form.value)))
      .subscribe(
        ()=>{},
        ()=>{}
      )
    location.href = "#";

  }

}
