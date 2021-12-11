import {TypeIngr} from "./typeEnum";
import {CategoryEnum} from "./categoryEnum";

export class IngrInfo {
  id: Number
  name: String
  type: TypeIngr
  category: CategoryEnum
  active: Boolean
  quantity: Number
  image: String

  constructor(init: Partial<IngrInfo>) {
    Object.assign(this, init);
  }
}
