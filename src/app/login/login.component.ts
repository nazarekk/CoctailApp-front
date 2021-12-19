import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  title = 'Sign In'
  success: boolean = false;
  message: string;
  alertClass: string;
  captchaToken: string = null;
  countError: number = 0;


  form: FormGroup = new FormGroup({});
  sSub: Subscription

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      captcha: this.captchaToken
    })
  }

  ngOnDestroy() {
    if (this.sSub) {
      this.sSub.unsubscribe()
    }

  }

  statusCheck(value: any): void {
    this.success = true;
    this.setNullCaptcha();
    if (value == 200) {
      this.message = "Authorization successful"
      this.alertClass = "alert-success"
      this.countError = 0
    } else if (value == 204) {
      this.message = "Invalid captcha"
      this.alertClass = "alert-danger"
    } else if (value == 404) {
      this.addCountError()
      this.message = "Wrong email or password try again"
      this.alertClass = "alert-danger"
    } else {
      this.message = "System error"
      this.alertClass = "alert-danger"
    }
  }

  setNullCaptcha(): void {
    this.captchaToken = null;
  }

  addCountError(): void {
    this.countError = this.countError + 1;
  }

  getCaptcha(token: string): void {
    this.captchaToken = token;
  }

  isSuccess(): void {
    this.success = false;
  }

  validCaptcha(countError): boolean {
    return !(countError >= 5 && this.captchaToken == null);
  }

  submit() {
    this.sSub = this.auth.loginUser(this.form.value)
      .subscribe(
        () => {
          switch (this.auth.getRole()) {
            case  "ROLE_CONFIRMED": {
              this.router.navigate(['/main'])
              break
            }
            case "ROLE_ADMIN": {
              this.router.navigate(['/moderatorlist'])
              break
            }
            case "ROLE_MODERATOR": {
              this.router.navigate(['/ingredients'])
              break
            }
          }
        },
        error => {
          this.statusCheck(error.status)
        }
      )
  }
}

