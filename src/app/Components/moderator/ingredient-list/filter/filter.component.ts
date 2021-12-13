import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IngrInfo} from "../IngredientModel";
import {TypeIngr} from "../typeEnum";
import {CategoryEnum} from "../categoryEnum";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter();
  filterInfo: IngrInfo;
  constructor() {
    this.filterInfo = new class implements IngrInfo {
      active: boolean;
      category: CategoryEnum;
      id: number;
      name: string;
      type: TypeIngr;
      quantity: number;
      image: string;
    }
  }

  ngOnInit() { }


  filter(type,category,active) {
    this.filterInfo.type = type;
    this.filterInfo.category = category;
    this.filterInfo.active = active;
    this.filterEvent.emit(this.filterInfo);
  }

}
