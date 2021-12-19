import { Component, OnInit } from '@angular/core';
import {EventModel} from "../models/eventModel";
import {EventsService} from "../../../api/events-service";
import {DishForEventModel} from "../models/dishForEventModel";
import {UserForEventModel} from "../models/userForEventModel";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: EventModel;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
  }

  Create(name: string, eventTime: string) {
    this.event = new class implements EventModel {
      id: number
      name: string
      creatorName: string
      eventTime: Date
      recipeList: DishForEventModel[]
      userList: UserForEventModel[]
    }
    this.event.name = name;
    this.event.eventTime = new Date(eventTime);
    console.log(this.event)
    this.eventsService.createEvent(this.event).subscribe(data => {if (data>0) location.href = '/event-info/'+ data.toString()})
  }

}
