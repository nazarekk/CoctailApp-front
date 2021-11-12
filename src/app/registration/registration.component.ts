import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = "Sign Up"

  registerUserData:any = {}

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(){

    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }

}
