import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-new-kitchenware',
  templateUrl: './new.kitchenware.component.html',
  styleUrls: ['./new.kitchenware.component.css']
})

export class NewKitchenwareComponent implements OnInit{

  title = 'Create new kitchenware'
  sSub: Subscription
  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  ngOnDestroy() {
    if(this.sSub){
      this.sSub.unsubscribe()
    }
  }

  submit(){
    console.log(this.form.value)
    this.sSub = this.auth.newKitchenware(this.form.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
