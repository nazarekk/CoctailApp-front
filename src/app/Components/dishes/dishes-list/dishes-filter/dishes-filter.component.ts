import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterInterface} from "./filter-interface";

@Component({
  selector: 'app-dishes-filter',
  templateUrl: './dishes-filter.component.html',
  styleUrls: ['./dishes-filter.component.css']
})
export class DishesFilterComponent implements OnInit {

  @Output() filterDishEvent: EventEmitter<FilterInterface> = new EventEmitter()
  dish: FilterInterface;

  constructor() { }

  ngOnInit(): void {
  }

  filterDishes(alcohol: String, sugarless: String) {
    this.dish = new class implements FilterInterface {
      alcohol: String;
      sugarless: String;
    }
    this.dish.alcohol = alcohol;
    this.dish.sugarless = sugarless;
    this.filterDishEvent.emit(this.dish);
  }

}
