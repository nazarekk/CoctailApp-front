import {Component, OnInit} from '@angular/core';
import {IngrInfo} from "../../moderator/ingredient-list/IngredientModel";
import {UserInventoryService} from "../../../api/user-inventory";
import {SystemInventory} from "../../../api/system-inventory";

@Component({
  selector: 'app-user-ingredients',
  templateUrl: './user-ingredients.component.html',
  styleUrls: ['./user-ingredients.component.css']
})
export class UserIngredientsComponent implements OnInit {

  ingredients: IngrInfo[] = [];
  sorted: Boolean = true;
  showAll: Boolean = true;

  constructor(private userInventoryService: UserInventoryService,
              private systemInventory: SystemInventory) {
  }

  ngOnInit(): void {
    this.userInventoryService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data)
  }

  search(searchValue) {
    this.userInventoryService.searchIngredient(searchValue).subscribe((data: IngrInfo[]) => this.ingredients = data)
  }

  sort() {
    if (this.sorted) this.ingredients.sort((a, b) => a.name.localeCompare(b.name.toString()))
    else this.ingredients.sort((a, b) => b.name.localeCompare(a.name.toString()))
    this.sorted = !this.sorted;
  }

  view() {
    if (this.showAll) {
      this.userInventoryService.allIngredients().subscribe((data: IngrInfo[]) => this.ingredients = data)
      this.showAll = !this.showAll
    } else {
      this.userInventoryService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data)
      this.showAll = !this.showAll
    }
  }

  addToStock(id: number) {
    this.userInventoryService.addToStock(id).subscribe(data => console.log(data));
  }

}
