import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTabComponent } from './SearchUser/user-tab/user-tab.component';
import {ModeratorModule} from "../moderator/moderator.module";



@NgModule({
  declarations: [
    UserTabComponent
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
