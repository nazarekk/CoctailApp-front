import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IngrInfo} from "../IngredientModel";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-tab.component.html',
  styleUrls: ['./ingredients-tab.component.css']
})
export class IngredientsTabComponent implements OnInit {

  constructor() { }

  @Input() ingredients: IngrInfo[];
  @Output() delIngrEvent = new EventEmitter();

  removeIngredient(id: Number) {
    this.delIngrEvent.emit(id);
  }

  editIngr(id: Number) {
    location.href = environment.frontUrl + "/ingredients/edit?id=" + id;
}

  ngOnInit(): void {

  }

}
