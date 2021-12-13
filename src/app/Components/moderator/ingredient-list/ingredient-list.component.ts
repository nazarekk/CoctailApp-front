import { Component, OnInit } from '@angular/core';
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
  sorted: Boolean = true;

  constructor(private systemInventory: SystemInventory) { }

  ngOnInit() {
    this.systemInventory.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data);
    console.log("ingred" + this.ingredients)
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

  sort() {
    if (this.sorted) this.ingredients.sort((a,b) => a.name.localeCompare(b.name.toString()))
    else this.ingredients.sort((a,b) => b.name.localeCompare(a.name.toString()))
    this.sorted = !this.sorted;
  }

  filter(data) {
    this.systemInventory.filterIngredient(data.type, data.category, data.active).subscribe( data => this.ingredients = data);

  }
}
