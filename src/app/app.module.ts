import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
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
import {ConfirmUserComponent} from "./registration/confirmUserComponent";
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { EditModeratorPersonalAccComponent } from './edit-moderator-personal-acc/edit-moderator-personal-acc.component';
import { EditModeratorPersonalAccInfoComponent } from './Components/edit-moderator-personal-acc-info/edit-moderator-personal-acc-info.component';


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
    EditModeratorPersonalAccComponent,
    EditModeratorPersonalAccInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
