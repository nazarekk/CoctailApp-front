import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngrInfo} from "../../moderator/ingredient-list/IngredientModel";
import {UserInventoryService} from "../../../api/user-inventory";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-ingredients',
  templateUrl: './user-ingredients.component.html',
  styleUrls: ['./user-ingredients.component.css']
})
export class UserIngredientsComponent implements OnInit, OnDestroy {

  ingredients: IngrInfo[] = [];
  sorted: Boolean = true;
  showAll: Boolean = true;
  errorEvent: Boolean = false;
  successEvent: Boolean = false;
  successText: String;
  ingredientSubscription: Subscription;
  serverResponse: Subscription;

  constructor(private userInventoryService: UserInventoryService) {
  }

  ngOnInit(): void {
    this.ingredientSubscription = this.userInventoryService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data)
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
    this.serverResponse.unsubscribe();
  }

  search(searchValue: String) {
    this.ingredientSubscription.unsubscribe();
    if (this.showAll) {
      this.ingredientSubscription = this.userInventoryService.searchIngredient(searchValue).subscribe((data: IngrInfo[]) => this.ingredients = data)
    } else {
      this.ingredientSubscription = this.userInventoryService.searchAllIngredient(searchValue).subscribe((data: IngrInfo[]) => this.ingredients = data)
    }

  }

  sort() {
    if (this.sorted) this.ingredients.sort((a, b) => a.name.localeCompare(b.name.toString()))
    else this.ingredients.sort((a, b) => b.name.localeCompare(a.name.toString()))
    this.sorted = !this.sorted;
  }

  view() {
    this.ingredientSubscription.unsubscribe();
    if (this.showAll) {
      this.ingredientSubscription = this.userInventoryService.allIngredients().subscribe((data: IngrInfo[]) => this.ingredients = data)
      this.showAll = !this.showAll
    } else {
      this.ingredientSubscription = this.userInventoryService.listIngredient().subscribe((data: IngrInfo[]) => this.ingredients = data)
      this.showAll = !this.showAll
    }
  }

  addToStock(ingr: IngrInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    if (this.showAll) {
      this.serverResponse = this.userInventoryService.removeFromStock(ingr.id).subscribe(() => {
        this.showAll = !this.showAll;
        this.view();
      });
    } else {
      if (ingr.quantity == undefined) ingr.quantity = 1;
      this.serverResponse = this.userInventoryService.addToStock(ingr.id, ingr.quantity).subscribe(() => {
        this.successText = "Ingredient successfully added"
        this.successEvent = true;
      }, error => {
        if (error.status == 406) this.errorEvent = true;
      });
    }
  }

  editStock(ingr: IngrInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.userInventoryService.editStock(ingr.id, ingr.quantity).subscribe(data => {
      if (data.status == 200) {
        this.showAll = !this.showAll;
        this.view();
      }
    })
  }

  filter(ingr: IngrInfo) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    if (this.showAll) {
      this.serverResponse = this.userInventoryService.filterIngredient(ingr.type, ingr.category,
        true).subscribe(data => this.ingredients = data);
    } else {
      this.serverResponse = this.userInventoryService.filterAllIngredient(ingr.type, ingr.category,
        true).subscribe(data => this.ingredients = data);
    }
  }

}
