import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsTabComponent } from './ingredient-list/ingredients-tab/ingredients-tab.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IngredientAddComponent} from "./ingredient-add/ingredient-add.component";
import {NavbarComponent} from "../navbar/navbar.component";
import { FilterComponent } from './ingredient-list/filter/filter.component';
import { KitchenwareAddComponent } from './kitchenware-add/kitchenware-add.component';
import { KitchenwareEditComponent } from './kitchenware-edit/kitchenware-edit.component';
import { KitchenwareListComponent } from './kitchenware-list/kitchenware-list.component';
import { FilterKitchenwareComponent } from './kitchenware-list/filter-kitchenware/filter-kitchenware.component';
import { KitchenwareTabComponent } from './kitchenware-list/kitchenware-tab/kitchenware-tab.component';



@NgModule({
  declarations: [
    NavbarComponent,
    IngredientsTabComponent,
    IngredientEditComponent,
    IngredientAddComponent,
    FilterComponent,
    KitchenwareAddComponent,
    KitchenwareEditComponent,
    KitchenwareListComponent,
    FilterKitchenwareComponent,
    KitchenwareTabComponent
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
