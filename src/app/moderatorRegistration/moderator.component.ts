import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})

export class ModeratorComponent {

  title = 'Sign up new moderator'

  form: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder, private auth: AuthService) {

    this.form = fb.group({
      email: ['', [Validators.required]]
      // isActive: ['', [Validators.required]]
    })
  }


  submit(){
    this.auth.registerModerator(this.form.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
