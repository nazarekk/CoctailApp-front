import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})

export class ModeratorComponent implements OnInit{

  title = 'Sign up new moderator'
  sSub: Subscription
  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      isActive: ['', [Validators.required]]
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
        ()=>this.router.navigate(['/overview']),
        err=>console.log(err)
      )
  }
}
