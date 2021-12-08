import {Component, OnInit} from '@angular/core';
import {IngrInfo} from "../../moderator/ingredient-list/IngredientModel";
import {ActivatedRoute} from "@angular/router";
import {DishesService} from "../../../api/dishes-service";
import {DishModel} from "../dishModel";
import {SystemInventory} from "../../../api/system-inventory";

@Component({
  selector: 'app-confirm-dish',
  templateUrl: './confirm-dish.component.html',
  styleUrls: ['./confirm-dish.component.css']
})
export class ConfirmDishComponent implements OnInit {

  actualInfo: DishModel;
  dishIngrs: IngrInfo[];
  catalogue: IngrInfo[];
  recipeId: Number;

  constructor(private route: ActivatedRoute,
              private dishesService: DishesService,
              private systemInventory: SystemInventory) {
  }

  ngOnInit(): void {
    this.refreshLists()
  }

  refreshLists() {
    this.systemInventory.filterIngredient("", "", true).subscribe(data =>
      this.catalogue = data);
    this.route.queryParams.subscribe(params => {
      this.dishesService.getDishes(params.id).subscribe((data: DishModel) => {
        this.actualInfo = data;
        this.dishIngrs = data.ingredientList;
        console.log(data)
      });
      this.recipeId = params.id;
    })
  }

  addToDish(name: String) {
    this.dishesService.addInrgedient(this.recipeId, name).subscribe(data => this.refreshLists())
    console.log(this.actualInfo)
  }

  removeFromDish(name: String) {
    this.dishesService.removeInrgedient(this.recipeId, name).subscribe(data => this.refreshLists())
  }

  Save(receipt: String) {
    this.actualInfo.receipt = receipt;
    this.actualInfo.name = "Dish10";
    this.dishesService.editDish(this.actualInfo).subscribe(data => console.log(data))
  }

}
