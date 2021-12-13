import {Component, OnInit} from '@angular/core';
import {DishModel} from "../dishModel";
import {TypeEnum} from "../typeEnum";
import {DishesService} from "../../../api/dishes-service";
import {AuthService} from "../../../auth/auth.service";
import {SystemInventory} from "../../../api/system-inventory";

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes: DishModel[] = [];
  typeEnum: TypeEnum

  constructor(private dishesService: DishesService,
              private auth: AuthService,
              private systemInventory: SystemInventory) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.dishesService.listDishes().subscribe((data: DishModel[]) => this.dishes = data);
  }

  isModerator(): Boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR")
  }

  like(dish: DishModel) {
    this.dishesService.likeDish(dish.id, !dish.liked).subscribe(data => this.refreshList())
  }

  favourite(dish: DishModel) {
    this.dishesService.favouriteDish(dish.id, !dish.favourite).subscribe(data => this.refreshList())
  }

  search(searchvalue) {
    this.dishesService.searchDishes(searchvalue).subscribe((data: DishModel[]) => this.dishes = data);
  }

}
