import {Component, OnInit} from '@angular/core';
import {IngrInfo} from "../../moderator/ingredient-list/IngredientModel";
import {ActivatedRoute} from "@angular/router";
import {DishesService} from "../../../api/dishes-service";
import {DishModel} from "../dishModel";
import {SystemInventory} from "../../../api/system-inventory";
import {FormBuilder} from "@angular/forms";

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

  constructor(private route: ActivatedRoute,
              private dishesService: DishesService,
              private systemInventory: SystemInventory,
              private fb: FormBuilder) {
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
    this.dishesService.addInrgedient(this.recipeId, name).subscribe(data => this.refreshList(), error => {
      this.showErr = true;
      console.log(error.status)
    })
    console.log(this.actualInfo)
  }

  removeFromDish(name: String) {
    this.dishesService.removeInrgedient(this.recipeId, name).subscribe(data => this.refreshList())
  }

  Save() {
    this.dishesService.editDish(this.actualInfo).subscribe(data => console.log(data))
  }

  closeErr() {
    this.showErr = false;
  }

  removeDish(id: number) {
    this.dishesService.removeDish(id).subscribe(data => {
      if (data.status == 200) location.href = "/dishes" +
        ""
    })
  }

  preview(image: string, recipe: string, type: string, category: string) {
    this.actualInfo.recipe = recipe;
    this.actualInfo.image = image;
    this.actualInfo.alcohol = type;
    this.actualInfo.sugarless = (category == "true");
  }

}
