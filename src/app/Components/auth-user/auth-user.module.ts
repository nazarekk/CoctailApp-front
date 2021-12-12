import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTabComponent } from './search-friend/user-tab/user-tab.component';
import {ModeratorModule} from "../moderator/moderator.module";
import { UserIngredientsComponent } from './user-ingredients/user-ingredients.component';



@NgModule({
  declarations: [
    UserTabComponent,
    UserIngredientsComponent
  ],
  exports: [
    UserTabComponent
  ],
  imports: [
    CommonModule,
    ModeratorModule
  ]
})
export class AuthUserModule { }
