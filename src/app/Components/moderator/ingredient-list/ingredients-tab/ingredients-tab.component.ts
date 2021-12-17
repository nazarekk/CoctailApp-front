import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IngrInfo} from "../IngredientModel";
import {environment} from "../../../../../environments/environment";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-tab.component.html',
  styleUrls: ['./ingredients-tab.component.css']
})
export class IngredientsTabComponent implements OnInit {

  constructor(private auth: AuthService) { }

  @Output() dishEvent = new EventEmitter();
  @Input() eventText: String;
  @Input() ingredients: IngrInfo[];
  @Input() inDish: Boolean = false;
  @Output() delIngrEvent = new EventEmitter();
  @Output() addToStockEvent = new EventEmitter();
  @Input() showStock: Boolean;
  @Output() editStockEvent = new EventEmitter();

  ngOnInit(): void {
  }

  removeIngredient(id: Number) {
    this.delIngrEvent.emit(id);
  }

  editIngr(id: Number) {
    location.href = environment.frontUrl + "/ingredients/edit?id=" + id;
  }

  isModerator(): Boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR")
  }

  isUser(): Boolean {
    return (this.auth.getRole() == "ROLE_CONFIRMED")
  }

  clickDish(name: String) {
    this.dishEvent.emit(name);
  }

  addToStock(ingr: IngrInfo) {
    this.addToStockEvent.emit(ingr);
  }

  editStock(ingr: IngrInfo) {
    this.editStockEvent.emit(ingr)
  }

}
