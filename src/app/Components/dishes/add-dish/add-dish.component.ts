import { Component, OnInit } from '@angular/core';
import {DishesService} from "../../../api/dishes-service";
import {DishModel} from "../dishModel";
import {IngrInfo} from "../../moderator/ingredient-list/IngredientModel";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dish: DishModel;

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
  }

  Add(name: String, type: String, category: String, image: String,receipt: String) {
    this.dish = new class implements DishModel {
      sugarless: Boolean;
      id: Number;
      image: String;
      ingredientList: IngrInfo[];
      name: String;
      rating: Number;
      receipt: String;
      alcohol: String;
    }
    this.dish.name = name;
    this.dish.alcohol = type;
    this.dish.sugarless = (category == "true");
    this.dish.image = image;
    this.dish.receipt = receipt;
    console.log(this.dish)
    this.dishesService.addDish(this.dish).subscribe(data => {if (data>0) location.href = "dishes/edit?id=" + data.toString()})
  }

}
