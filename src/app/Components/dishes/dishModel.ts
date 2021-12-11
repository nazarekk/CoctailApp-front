import {IngrInfo} from "../moderator/ingredient-list/IngredientModel";

export interface DishModel {
  id: number
  name: string
  alcohol: string
  rating: number
  sugarless: boolean
  ingredientList: IngrInfo[]
  recipe: string
  image: string
}
