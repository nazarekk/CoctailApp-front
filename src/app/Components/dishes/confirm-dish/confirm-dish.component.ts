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
  showErr: Boolean;
  errorText: String;

  constructor(private route: ActivatedRoute,
              private dishesService: DishesService,
              private systemInventory: SystemInventory) {
  }

  ngOnInit(): void {
    this.showErr = false
    this.refreshList()
  }

  refreshList() {
    // this.catalogue = this.catalogue.filter(x => !this.dishIngrs.includes(x))
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
    console.log(this.catalogue)
  }

  addToDish(name: String) {
    this.dishesService.addIngredient(this.recipeId, name).subscribe(() => this.refreshList(), error => {
      this.showErr = true;
      this.errorText = "This ingredient is already included"
      console.log(error.status)
    })
    console.log(this.actualInfo)
  }

  removeFromDish(name: String) {
    this.dishesService.removeIngredient(this.recipeId, name).subscribe(() => this.refreshList())
  }

  Save() {
    this.dishesService.editDish(this.actualInfo).subscribe(data => {
      if (data.status == 200) location.href = "/dishes"
    },
      () => {
      this.ngOnInit();
      this.showErr = true;
      this.errorText = "Error occurred while editing dish";
      }
    )
  }

  removeDish(id: number) {
    this.dishesService.removeDish(id).subscribe(data => {
      if (data.status == 200) location.href = "/dishes"
    })
  }

  preview(image: string, recipe: string, type: string, category: string) {
    this.actualInfo.recipe = recipe;
    this.actualInfo.image = image;
    this.actualInfo.alcohol = type;
    this.actualInfo.sugarless = (category == "true");
  }

}
