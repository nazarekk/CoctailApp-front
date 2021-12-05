import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {IngrInfo} from "./IngredientModel";
import {environment} from "../../../../environments/environment";
import {SystemInventory} from "../../../api/system-inventory";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit{

  searchValue: string;
  ingredients: IngrInfo[] = [];

  constructor(private systemInventory: SystemInventory) {
  }

  ngOnInit() {
    this.systemInventory.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data);
    console.log("ingred" + this.ingredients)
    //this.systemInventory.listIngredient().pipe()
  }

  search(searchValue) {
    this.systemInventory.searchIngredient(searchValue).subscribe((data: IngrInfo[]) => this.ingredients = data);
    console.log(this.ingredients);
  }

  removeIngredient (id: Number) {
    this.systemInventory.removeIngredient(id).subscribe(
      data => {
        if (data == true) {
          for (var i = 0;i < this.ingredients.length;i++) {
            if (this.ingredients[i].id == id) this.ingredients[i].active = false;
          }
        }
          }
    );
  }

  relocateAdd() {
    location.href = environment.frontUrl + "/ingredients/add"
  }

  logout() {
    AuthService.logout();
  }

}
