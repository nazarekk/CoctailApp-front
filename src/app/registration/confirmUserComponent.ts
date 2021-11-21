import {AuthService} from "../auth/auth.service";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-registration',
  templateUrl: './confirmuser.component.html'
})

export class ConfirmUserComponent{
  verificationCode: string
  constructor( private auth: AuthService,
               private route: ActivatedRoute) {}
  submit(){
    this.route.queryParams.subscribe(params => {
      this.verificationCode = params.code
    }
    );

    this.auth.verificateUser(this.verificationCode).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
