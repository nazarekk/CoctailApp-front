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
  stockText: String = "";

  constructor(private userInventoryService: UserInventoryService,
              private systemInventory: SystemInventory) {
  }

  ngOnInit(): void {
    this.userInventoryService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data)
    this.stockText = "Remove from stock";
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
      this.stockText = "Add to stock";
    } else {
      this.userInventoryService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data)
      this.showAll = !this.showAll
      this.stockText = "Remove from stock";
    }
  }

  addToStock(id: number) {
    if (this.showAll) {
      this.userInventoryService.removeFromStock(id).subscribe(data => {
        this.showAll = !this.showAll;
        this.view();
      });
    } else {
      this.userInventoryService.addToStock(id).subscribe(data => {
        this.showAll = !this.showAll;
        this.view();
      });
    }
  }

}
