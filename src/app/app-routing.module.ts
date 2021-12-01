import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ModeratorComponent} from "./moderatorRegistration/moderator.component";
import {ModeratorVerificationComponent} from "./moderatorVerification/moderator.verification.component";
import {ModeratorPersonalComponent} from "./moderatorPersonal/moderator.personal.component";
import {ConfirmUserComponent} from "./registration/confirmUserComponent";
import {RoleGuardGuard} from "./auth/role-guard.guard";
import {PermissionDeniedComponent} from "./errors/permission-denied/permission-denied.component";
import {SearchUserComponent} from "./Components/auth-user/SearchUser/search-user.component";
import {IngredientListComponent} from "./Components/moderator/ingredient-list/ingredient-list.component";
import {IngredientEditComponent} from "./Components/moderator/ingredient-edit/ingredient-edit.component";
import {IngredientAddComponent} from "./Components/moderator/ingredient-add/ingredient-add.component";

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
    component: ModeratorComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'moderator/verification',
    component: ModeratorVerificationComponent
  },
  {
    path: 'moderator/edit',
    component: ModeratorPersonalComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'searchfriend',
    component: SearchUserComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_CONFIRMED']
    }
  },
  {
    path: "registration/verification",
    component: ConfirmUserComponent
  },
  {
    path: 'permission-denied',
    component: PermissionDeniedComponent
  },
  {
    path: 'ingredients',
    component: IngredientListComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'ingredients/edit',
    component: IngredientEditComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'ingredients/add',
    component: IngredientAddComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
