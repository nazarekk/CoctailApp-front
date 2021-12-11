import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KitchenwareInfo} from "../KitchenwareModel";
import {TypeEnumKitch} from "../typeEnum";
import {CategoryEnumKitch} from "../categoryEnum";

@Component({
  selector: 'app-filter-kitchenware',
  templateUrl: './filter-kitchenware.component.html',
  styleUrls: ['./filter-kitchenware.component.css']
})
export class FilterKitchenwareComponent implements OnInit {

  @Output() filterEvent = new EventEmitter();
  filterInfo: KitchenwareInfo;
  constructor() {
    this.filterInfo = new class implements KitchenwareInfo {
      active: Boolean;
      category: CategoryEnumKitch;
      id: Number;
      name: String;
      type: TypeEnumKitch;
      image: String;
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
