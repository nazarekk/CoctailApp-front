import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsTabComponent } from './ingredient-list/ingredients-tab/ingredients-tab.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';
import {NavbarComponent} from "../navbar/navbar.component";
import { FilterComponent } from './ingredient-list/filter/filter.component';



@NgModule({
  declarations: [
    NavbarComponent,
    IngredientsTabComponent,
    IngredientEditComponent,
    IngredientAddComponent,
    FilterComponent
  ],
  exports: [
    NavbarComponent,
    IngredientsTabComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ModeratorModule { }
