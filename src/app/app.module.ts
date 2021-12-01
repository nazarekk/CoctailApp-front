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
import {SearchfriendComponent} from './searchfriend/searchfriend.component';
import {NavbarUserComponent} from './Components/navbar-user/navbar-user.component';
import {ConfirmUserComponent} from "./registration/confirmUserComponent";
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { ModeratorListComponent } from './moderator-list/moderator-list.component';
import { ModeratorListInfoComponent } from './Components/moderator-list-info/moderator-list-info.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
    ConfirmUserComponent,
    ToolBarComponent,
    UserProfileComponent,
    UserInfoComponent,
    ModeratorListComponent,
    ModeratorListInfoComponent,
    SearchfriendComponent,
    NavbarUserComponent,
    ModeratorPersonalComponent,
    ConfirmUserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
