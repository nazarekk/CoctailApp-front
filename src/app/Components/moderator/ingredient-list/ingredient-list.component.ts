import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {IngrInfo} from "./IngredientModel";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit{

  searchValue: string;
  ingredients: IngrInfo[];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data);
  }

  search(searchValue) {
    this.authService.searchIngredient(searchValue).subscribe((data: IngrInfo[]) => this.ingredients = data);
    console.log(this.ingredients);
  }

  removeIngredient (id: Number) {
    console.log(id)
    this.authService.removeIngredient(id);
  }

  relocateAdd() {
    location.href = environment.frontUrl + "/ingredients/add"
  }

  logout() {
    AuthService.logout();
  }

}
