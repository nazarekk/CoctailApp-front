import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ingredient-list/navbar/navbar.component';
import { IngredientsTabComponent } from './ingredient-list/ingredients-tab/ingredients-tab.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';



@NgModule({
  declarations: [
    NavbarComponent,
    IngredientsTabComponent,
    IngredientEditComponent,
    IngredientAddComponent
  ],
  exports: [
    NavbarComponent,
    IngredientsTabComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ModeratorModule { }
