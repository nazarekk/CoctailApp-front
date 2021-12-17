import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from "../../models/eventModel";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() event: EventModel;

  constructor() { }

  ngOnInit(): void {
  }

}
