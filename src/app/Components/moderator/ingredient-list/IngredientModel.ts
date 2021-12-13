import {TypeIngr} from "./typeEnum";
import {CategoryEnum} from "./categoryEnum";

export interface IngrInfo {
  id: number
  name: string
  type: TypeIngr
  category: CategoryEnum
  active: boolean
  quantity: number
  image: string
}
