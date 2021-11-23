import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ModeratorComponent} from "./moderatorRegistration/moderator.component";
import {ModeratorVerificationComponent} from "./moderatorVerification/moderator.verification.component";
import {ModeratorPersonalComponent} from "./moderatorPersonal/moderator.personal.component";
import {ConfirmUserComponent} from "./registration/confirmUserComponent";
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {ModeratorListComponent} from "./moderator-list/moderator-list.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'moderator',
    component: ModeratorComponent
  },
  {
    path: 'moderator/verification',
    component: ModeratorVerificationComponent
  },
  {
    path: 'moderator/edit',
    component: ModeratorPersonalComponent
  },
  {
    path: "registration/verification",
    component: ConfirmUserComponent
  },
  {
    path: "userprofile",
    component: UserProfileComponent
  },
  {
    path: "moderatorlist",
    component: ModeratorListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
