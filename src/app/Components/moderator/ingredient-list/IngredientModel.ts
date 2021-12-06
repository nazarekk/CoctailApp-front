import {TypeIngr} from "./typeEnum";
import {CategoryEnum} from "./categoryEnum";

export interface IngrInfo {
  id: Number;
  name: String;
  type: TypeIngr;
  category: CategoryEnum;
  active: Boolean;
}
