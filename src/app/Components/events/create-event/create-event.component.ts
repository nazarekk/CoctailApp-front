import { Component, OnInit } from '@angular/core';
import {DishModel} from "../../dishes/dishModel";
import {EventModel} from "../eventModel";
import {EventsService} from "../../../api/events-service";
import {UserInfo} from "../../auth-user/search-friend/user-model";

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
      dishesList: DishModel[]
      userList: UserInfo[]
    }
    this.event.name = name;
    this.event.eventTime = new Date(eventTime);
    console.log(this.event)
    this.eventsService.createEvent(this.event).subscribe(data => {if (data>0) location.href = "dishes/edit?id=" + data.toString()})
  }

}
