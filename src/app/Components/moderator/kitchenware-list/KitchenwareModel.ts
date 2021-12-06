import {TypeEnumKitch} from "./typeEnum";
import {CategoryEnumKitch} from "./categoryEnum";

export interface KitchenwareInfo {
  id: Number;
  name: String;
  type: TypeEnumKitch;
  category: CategoryEnumKitch;
  active: Boolean;
}
