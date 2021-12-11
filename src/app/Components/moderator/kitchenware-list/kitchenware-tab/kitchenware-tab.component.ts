import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {KitchenwareInfo} from "../KitchenwareModel";

@Component({
  selector: 'app-kitchenware-tab',
  templateUrl: './kitchenware-tab.component.html',
  styleUrls: ['./kitchenware-tab.component.css']
})
export class KitchenwareTabComponent implements OnInit {

  constructor() { }

  @Input() kitchenwares: KitchenwareInfo[];
  @Output() delKitchEvent = new EventEmitter();

  renoveKitch(id: Number) {
    this.delKitchEvent.emit(id);
  }

  editKitch(id: Number) {
    location.href = environment.frontUrl + "/kitchenwares/edit?id=" + id;
  }

  ngOnInit(): void {

  }

}
