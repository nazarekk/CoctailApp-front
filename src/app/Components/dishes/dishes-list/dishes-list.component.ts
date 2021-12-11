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
    this.dishesService.listDishes().subscribe((data: DishModel[]) => this.dishes = data)
    // this.dishes[0] = new class implements DishModel {
    //   category: Boolean;
    //   id: Number;
    //   ingredients: IngrInfo[];
    //   name: String;
    //   receipt: String;
    //   type: TypeEnum;
    //   rating: Number;
    // }
    // this.dishes[0].id=0;
    // this.dishes[0].name = "Dish1";
    // this.dishes[0].type = TypeEnum.lowalcohol;
    // this.dishes[0].category = true;
    // this.dishes[0].receipt = "Suck some cock and go home pls"
    // this.dishes[0].rating=1;
    // this.systemInventory.searchIngredient("Vod").subscribe((data: IngrInfo[]) => this.dishes[0].ingredients = data);
    // this.dishes[1] = new class implements DishModel {
    //   category: Boolean;
    //   id: Number;
    //   ingredients: IngrInfo[];
    //   name: String;
    //   receipt: String;
    //   type: TypeEnum;
    //   rating: Number;
    // }
    // this.dishes[1].id=0;
    // this.dishes[1].name = "Dish2";
    // this.dishes[1].type = TypeEnum.alcohol;
    // this.dishes[1].category = false;
    // this.dishes[1].receipt = "Go fuck yourself please I fucked your mom";
    // this.dishes[1].rating=2;
    // this.systemInventory.searchIngredient("In").subscribe((data: IngrInfo[]) => this.dishes[1].ingredients = data);
  }

  isModerator(): Boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR")
  }

  search(searchvalue) {

  }

}
