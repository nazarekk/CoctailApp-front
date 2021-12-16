import {AuthService} from "../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './confirmuser.component.html',
  styleUrls: ['./registration.component.css']
})

export class ConfirmUserComponent implements OnInit{
  user: FormGroup = new FormGroup({});
  isError: Boolean = false;
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
    console.log(this.user.value);
    this.auth.verifyUser(this.user.value).subscribe(data => {
      if (data.status == 200) location.href = "/login";
    }, () => this.isError = true);
  }
}
