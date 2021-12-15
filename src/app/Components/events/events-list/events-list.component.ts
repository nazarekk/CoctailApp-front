import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from "../eventModel";
import {EventsService} from "../../../api/events-service";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: EventModel[] = [];

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventService.listEvents().subscribe((data: EventModel[]) => this.events = data)
  }

}
