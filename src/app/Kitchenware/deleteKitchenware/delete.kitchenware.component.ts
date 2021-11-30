import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-delete-kitchenware',
  templateUrl: './delete.kitchenware.component.html',
  styleUrls: ['./delete.kitchenware.component.css']
})

export class DeleteKitchenwareComponent implements OnInit{

  title = 'Delete existing kitchenware'
  sSub: Subscription
  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  ngOnDestroy() {
    if(this.sSub){
      this.sSub.unsubscribe()
    }
  }

  submit(){
    console.log(this.form.value)
    this.sSub = this.auth.deleteKitchenware(this.form.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
