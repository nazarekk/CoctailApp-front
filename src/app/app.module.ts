import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ModeratorComponent} from "./moderatorRegistration/moderator.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModeratorVerificationComponent} from "./moderatorVerification/moderator.verification.component";
import {ModeratorPersonalComponent} from "./moderatorPersonal/moderator.personal.component";
import {AuthInterceptor} from "./auth/auth-interceptor";
import { SearchfriendComponent } from './searchfriend/searchfriend.component';
import { NavbarUserComponent } from './Components/navbar-user/navbar-user.component';
import {PermissionDeniedComponent} from "./errors/permission-denied/permission-denied.component";
import {SearchfriendComponent} from './searchfriend/searchfriend.component';
import {NavbarUserComponent} from './Components/navbar-user/navbar-user.component';
import {ConfirmUserComponent} from "./registration/confirmUserComponent";

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
    SearchfriendComponent,
    NavbarUserComponent,
    ModeratorPersonalComponent,
    ConfirmUserComponent,
    NavbarUserComponent,
    PermissionDeniedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
