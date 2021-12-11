import {TypeEnumKitch} from "./typeEnum";
import {CategoryEnumKitch} from "./categoryEnum";

export interface KitchenwareInfo {
  id: number;
  name: string;
  type: TypeEnumKitch;
  category: CategoryEnumKitch;
  active: boolean;
  image: string;
}
