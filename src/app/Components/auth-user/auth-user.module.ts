import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTabComponent } from './search-friend/user-tab/user-tab.component';
import {ModeratorModule} from "../moderator/moderator.module";
import { UserIngredientsComponent } from './user-ingredients/user-ingredients.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { StockFilterComponent } from './user-ingredients/stock-filter/stock-filter.component';



@NgModule({
  declarations: [
    UserTabComponent,
    UserIngredientsComponent,
    FriendlistComponent,
    StockFilterComponent
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
