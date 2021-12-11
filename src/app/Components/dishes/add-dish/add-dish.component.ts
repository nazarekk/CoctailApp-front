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

  Add(name: string, type: string, category: string, image: string,receipt: string) {
    this.dish = new class implements DishModel {
      sugarless: boolean;
      id: number;
      image: string;
      ingredientList: IngrInfo[];
      name: string;
      rating: number;
      recipe: string;
      alcohol: string;
    }
    this.dish.name = name;
    this.dish.alcohol = type;
    this.dish.sugarless = (category == "true");
    this.dish.recipe = receipt;
    if (image === "") image = "https://cdn0.iconfinder.com/data/icons/documents-50/32/undefined-document-512.png"
    this.dish.image = image
    console.log(this.dish)
    this.dishesService.addDish(this.dish).subscribe(data => {if (data>0) location.href = "dishes/edit?id=" + data.toString()})
  }

}
