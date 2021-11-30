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
import {NavbarKitchenwareComponent} from "./Components/navbar-kitchenware/navbar-kitchenware.component";
import {NewKitchenwareComponent} from "./Kitchenware/newKitchenware/new.kitchenware.component";
import {EditKitchenwareComponent} from "./Kitchenware/editKitchenware/edit.kitchenware.component";
import {DeleteKitchenwareComponent} from "./Kitchenware/deleteKitchenware/delete.kitchenware.component";

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
    NewKitchenwareComponent,
    EditKitchenwareComponent,
    DeleteKitchenwareComponent,
    ConfirmUserComponent,
    NavbarKitchenwareComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
