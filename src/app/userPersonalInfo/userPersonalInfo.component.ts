import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {UserPersonalInfo} from "../Interfaces/UserPersonalInfo";



@Component({
  selector: 'app-edit',
  templateUrl: './userPersonalInfo.component.html',
  styleUrls: ['./userPersonalInfo.component.css']
})

export class UserPersonalInfoComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  success:boolean;

  constructor(private auth: AuthService,
              private fb: FormBuilder
  ) {
  }


  user: UserPersonalInfo;

  ngOnInit() {
    this.auth.getInformation()
      .subscribe((data: UserPersonalInfo) => this.user = data)

    this.form = this.fb.group({
      nickname: [''],
      information: ['']
    })
  }

}
