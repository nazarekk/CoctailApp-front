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
import {SearchUserComponent} from "./Components/auth-user/search-friend/search-user.component";
import {IngredientListComponent} from "./Components/moderator/ingredient-list/ingredient-list.component";
import {IngredientEditComponent} from "./Components/moderator/ingredient-edit/ingredient-edit.component";
import {IngredientAddComponent} from "./Components/moderator/ingredient-add/ingredient-add.component";
import {SettingsComponent} from "./settings/settings.component";
import {EditPersonalInfoComponent} from "./settings/editPersonalInfo/edit-personal-info.component";
import {KitchenwareListComponent} from "./Components/moderator/kitchenware-list/kitchenware-list.component";
import {KitchenwareEditComponent} from "./Components/moderator/kitchenware-edit/kitchenware-edit.component";
import {KitchenwareAddComponent} from "./Components/moderator/kitchenware-add/kitchenware-add.component";
import {DishesListComponent} from "./Components/dishes/dishes-list/dishes-list.component";
import {AddDishComponent} from "./Components/dishes/add-dish/add-dish.component";
import {ConfirmDishComponent} from "./Components/dishes/confirm-dish/confirm-dish.component";
import {UserIngredientsComponent} from "./Components/auth-user/user-ingredients/user-ingredients.component";
import {UserPersonalInfoComponent} from "./userPersonalInfo/userPersonalInfo.component";
import {EventsListComponent} from "./Components/events/events-list/events-list.component";
import {CreateEventComponent} from "./Components/events/create-event/create-event.component";
import {EventInfoComponent} from "./Components/events/event-info/event-info.component";

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
    path: 'main',
    component: UserPersonalInfoComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_CONFIRMED']
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
  },
  {
    path: "settings",
    component: SettingsComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRoles: ['ROLE_CONFIRMED']
    }
  },
  {
    path: "settings/edit",
    component: EditPersonalInfoComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRoles: ['ROLE_CONFIRMED']
    }
  },
  {
    path: 'kitchenwares',
    component: KitchenwareListComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'kitchenwares/edit',
    component: KitchenwareEditComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'kitchenwares/add',
    component: KitchenwareAddComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'dishes',
    component: DishesListComponent,
  },
  {
    path: 'dishes/add',
    component: AddDishComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'dishes/edit',
    component: ConfirmDishComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_MODERATOR']
    }
  },
  {
    path: 'my/ingredients',
    component: UserIngredientsComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_CONFIRMED']
    }
  },
  {
    path: 'events',
    component: EventsListComponent,
  },
  {
    path: 'events/create',
    component: CreateEventComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_CONFIRMED']
    }
  },
  {
    path: 'event-info/:eventId',
    component: EventInfoComponent,
    canActivate: [RoleGuardGuard],
    data:{
      expectedRoles: ['ROLE_CONFIRMED']
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
