import {DishForEventModel} from "./dishForEventModel";
import {UserForEventModel} from "./userForEventModel";


export interface EventModel {
  id: number
  name: string
  creatorName: string
  eventTime: Date
  recipeList: DishForEventModel[]
  userList: UserForEventModel[]
}
