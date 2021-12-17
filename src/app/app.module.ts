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
import {PermissionDeniedComponent} from "./errors/permission-denied/permission-denied.component";
import {SearchUserComponent} from "./Components/auth-user/search-friend/search-user.component";
import {ConfirmUserComponent} from "./registration/confirmUserComponent";
import {SettingsComponent} from "./settings/settings.component";
import {EditPersonalInfoComponent} from "./settings/editPersonalInfo/edit-personal-info.component";
import {IngredientListComponent} from "./Components/moderator/ingredient-list/ingredient-list.component";
import {AuthUserModule} from "./Components/auth-user/auth-user.module";
import {ModeratorModule} from "./Components/moderator/moderator.module";
import {NavbarComponent} from './Components/navbar/navbar.component';
import {UserPersonalInfoComponent} from "./userPersonalInfo/userPersonalInfo.component";
import {CaptchaComponent} from './captcha/captcha.component';
import {RecaptchaModule, RecaptchaFormsModule} from "ng-recaptcha";
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { ModeratorListComponent } from './moderator-list/moderator-list.component';
import { ModeratorListInfoComponent } from './Components/moderator-list-info/moderator-list-info.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EditModeratorPersonalDataComponent } from './Components/edit-moderator-personal-data/edit-moderator-personal-data.component';
import { ModeratorEditComponent } from './moderator-edit/moderator-edit.component';

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
    UserPersonalInfoComponent,
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
    ConfirmUserComponent,
    PermissionDeniedComponent,
    ConfirmUserComponent,
    SearchUserComponent,
    IngredientListComponent,
    ConfirmUserComponent,
    SettingsComponent,
    EditPersonalInfoComponent,
    CaptchaComponent
    ConfirmUserComponent,
    EditModeratorPersonalDataComponent,
    ModeratorEditComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthUserModule,
    ReactiveFormsModule,
    ModeratorModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatTableModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [INTERCEPTOR_PROVIDER],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
