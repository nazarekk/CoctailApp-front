import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth/auth.service";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ModeratorComponent} from "./moderatorRegistration/moderator.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModeratorVerificationComponent} from "./moderatorVerification/moderator.verification.component";
import {ModeratorPersonalComponent} from "./moderatorPersonal/moderator.personal.component";
import {AuthInterceptor} from "./auth/auth-interceptor";
import {SearchUserComponent} from "./Components/auth-user/SearchUser/search-user.component";
import {ConfirmUserComponent} from "./registration/confirmUserComponent";
import {AuthUserModule} from "./Components/auth-user/auth-user.module";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ModeratorComponent,
    ModeratorVerificationComponent,
    ModeratorPersonalComponent,
    ModeratorPersonalComponent,
    ConfirmUserComponent,
    SearchUserComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthUserModule,
    ReactiveFormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
