import {TypeIngr} from "./typeEnum";
import {CategoryEnum} from "./categoryEnum";

export interface IngrInfo {
  id: Number
  name: string
  type: TypeIngr
  category: CategoryEnum
  active: boolean
  quantity: number
  image: string
}
