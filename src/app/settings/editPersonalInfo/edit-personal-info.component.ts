import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmedValidator} from "../../registration/confirmed.validator";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit',
  templateUrl: './editPersonalInfo.component.html',
  styleUrls: ['./editPersonalInfo.component.css']
})

export class EditPersonalInfoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  success = false

  constructor(private fb: FormBuilder,
              private auth: AuthService
              ) {}

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      doubleCheckPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'doubleCheckPass')
    })
  }

  clearFields() {

  }
}
