import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})

export class ModeratorComponent implements OnInit,OnDestroy{

  title = 'Sign up new moderator'
  sSub: Subscription
  form: FormGroup = new FormGroup({});
  alert: Boolean = false;
  displayText: String;

  constructor(private fb: FormBuilder,
              private auth: AuthService) {}

  ngOnInit(){
    this.form = this.fb.group({
      email: ['',[Validators.email,Validators.required]],
      isActive: [true]
    })
  }

  ngOnDestroy() {
    if(this.sSub){
      this.sSub.unsubscribe()
    }
  }

  submit(){
    this.sSub = this.auth.registerModerator(this.form.value)
      .subscribe(
        ()=>{
          this.alert = true;
          this.displayText = "User successfully created";
        },
        ()=>{
          this.alert = true;
          this.displayText = "This email is already in use";
        }
      )
  }
}
