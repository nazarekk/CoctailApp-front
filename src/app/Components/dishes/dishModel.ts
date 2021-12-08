import {IngrInfo} from "../moderator/ingredient-list/IngredientModel";

export class DishModel {
  id: Number
  name: String
  alcohol: String
  rating: Number
  sugarless: Boolean
  ingredientList: IngrInfo[]
  receipt: String
  image: String

  constructor(init: Partial<DishModel>) {
    Object.assign(this, init);
  }
}
