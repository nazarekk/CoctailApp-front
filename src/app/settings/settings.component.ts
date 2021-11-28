import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator} from "../registration/confirmed.validator";
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  title = 'Settings'


  constructor(private fb: FormBuilder,
              private auth: AuthService
             ) {
  }

  form: FormGroup = new FormGroup({});
  success = false


  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      doubleCheckPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'doubleCheckPass')
    })

  }

  jsonPassword(value:any){
    return value
  }

  submit(){
    this.auth.changePassword(this.jsonPassword(this.form.value))
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}