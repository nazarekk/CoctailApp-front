import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-moderator-personal',
  templateUrl: './moderator.personal.component.html',
  styleUrls: ['./moderator.personal.component.css']
})

export class ModeratorPersonalComponent implements OnInit{

  title = 'Edit moderator personal data'
  sSub: Subscription
  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.form = this.fb.group({
      nickname: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    })
  }

  ngOnDestroy() {
    if(this.sSub){
      this.sSub.unsubscribe()
    }
  }

  submit(){
    console.log(this.form.value)
    this.sSub = this.auth.editModerator(this.form.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
