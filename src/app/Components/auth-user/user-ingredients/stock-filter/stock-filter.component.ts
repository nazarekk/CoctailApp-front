import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IngrInfo} from "../../../moderator/ingredient-list/IngredientModel";
import {TypeIngr} from "../../../moderator/ingredient-list/typeEnum";
import {CategoryEnum} from "../../../moderator/ingredient-list/categoryEnum";

@Component({
  selector: 'app-stock-filter',
  templateUrl: './stock-filter.component.html',
  styleUrls: ['./stock-filter.component.css']
})
export class StockFilterComponent implements OnInit {

  ingr: IngrInfo

  @Output() filterEvent = new EventEmitter();

  constructor() {
    this.ingr = new class implements IngrInfo {
      active: boolean;
      category: CategoryEnum;
      id: number;
      image: string;
      name: string;
      quantity: number;
      type: TypeIngr;
    }
  }

  ngOnInit(): void {
  }
  filter(type, category) {
    this.ingr.type = type;
    this.ingr.category = category
    this.filterEvent.emit(this.ingr)
  }

}
