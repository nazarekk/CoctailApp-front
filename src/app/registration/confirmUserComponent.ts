import {AuthService} from "../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmedValidator} from "./confirmed.validator";

@Component({
  selector: 'app-registration',
  templateUrl: './confirmuser.component.html',
  styleUrls: ['./registration.component.css']
})

export class ConfirmUserComponent implements OnInit{
  user: FormGroup = new FormGroup({});
  constructor( private auth: AuthService,
               private fb: FormBuilder,
               private route: ActivatedRoute){

  }

  ngOnInit() {
    this.user = this.fb.group({
      nickname: [''],
      verificationCode: [''],
    })
  }

  submit(nickname){
    this.route.queryParams.subscribe(params => {
      this.user.value.verificationCode = params.code
    });
    this.user.value.nickname = nickname;
    this.auth.verifyUser(this.user.value);
  }
}
