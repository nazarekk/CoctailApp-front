import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './SearchUser/search-bar/search-bar.component';
import { UserTabComponent } from './SearchUser/user-tab/user-tab.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    UserTabComponent
  ],
  exports: [
    SearchBarComponent,
    UserTabComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthUserModule { }
