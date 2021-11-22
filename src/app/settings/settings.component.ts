import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator} from "../registration/confirmed.validator";
import {AuthService} from "../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  title = 'Settings'


  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
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

  removeDoubleCheckPass(value:any){
    delete value['doubleCheckPass']
    return value
  }

  submit(){
    this.auth.registerUser(this.removeDoubleCheckPass(this.form.value))
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
