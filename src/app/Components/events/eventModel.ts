import {Time} from "@angular/common";
import {DishModel} from "../dishes/dishModel";
import {UserInfo} from "../auth-user/search-friend/user-model";


export interface EventModel {
  id: number
  name: string
  creatorName: string
  eventTime: Date
  dishesList: DishModel[]
  userList: UserInfo[]
}
