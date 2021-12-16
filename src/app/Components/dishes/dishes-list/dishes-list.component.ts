import {Component, OnDestroy, OnInit} from '@angular/core';
import {DishModel} from "../dishModel";
import {TypeEnum} from "../typeEnum";
import {DishesService} from "../../../api/dishes-service";
import {AuthService} from "../../../auth/auth.service";
import {FilterInterface} from "./dishes-filter/filter-interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit, OnDestroy {

  dishes: DishModel[] = [];
  typeEnum: TypeEnum;
  dishesSubscription: Subscription;
  serverResponse: Subscription;

  constructor(private dishesService: DishesService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.dishesSubscription = this.dishesService.listDishes().subscribe((data: DishModel[]) => this.dishes = data);
  }

  ngOnDestroy() {
    this.dishesSubscription.unsubscribe();
    this.serverResponse.unsubscribe();
  }

  refreshList() {
    this.dishesSubscription.unsubscribe();
    this.dishesService.listDishes().subscribe((data: DishModel[]) => this.dishes = data);
  }

  isModerator(): Boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR")
  }

  like(dish: DishModel) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.dishesService.likeDish(dish.id, !dish.liked).subscribe(() => this.refreshList())
  }

  favourite(dish: DishModel) {
    if (!(this.serverResponse == undefined)) this.serverResponse.unsubscribe();
    this.serverResponse = this.dishesService.favouriteDish(dish.id, !dish.favourite).subscribe(() => this.refreshList())
  }

  search(searchvalue) {
    this.dishesSubscription.unsubscribe();
    this.dishesSubscription = this.dishesService.searchDishes(searchvalue).subscribe((data: DishModel[]) => this.dishes = data);
  }

  filterDish(filter: FilterInterface) {
    this.dishesSubscription.unsubscribe();
    this.dishesSubscription = this.dishesService.filterDishes(filter.sugarless, filter.alcohol).subscribe((data: DishModel[]) => this.dishes = data)
  }

}
