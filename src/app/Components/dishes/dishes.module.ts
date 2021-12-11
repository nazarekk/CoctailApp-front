import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import {AppModule} from "../../app.module";
import { DishesComponent } from './dishes-list/dishes/dishes.component';
import { ConfirmDishComponent } from './confirm-dish/confirm-dish.component';
import {ModeratorModule} from "../moderator/moderator.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DishesListComponent,
    AddDishComponent,
    EditDishComponent,
    DishesComponent,
    ConfirmDishComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    ModeratorModule,
    ReactiveFormsModule
  ]
})
export class DishesModule { }
