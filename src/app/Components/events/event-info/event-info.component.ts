import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventModel} from "../models/eventModel";
import {EventsService} from "../../../api/events-service";
import {Subscription} from "rxjs";
import {UserForEventModel} from "../models/userForEventModel";
import {DishForEventModel} from "../models/dishForEventModel";

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  event: EventModel
  usersList: UserForEventModel[]
  recipesList: DishForEventModel[]

  private routeSub: Subscription

  constructor(private route: ActivatedRoute,
              private eventService: EventsService) { }

  ngOnInit(): void {
    this.refreshInfo()
  }

  refreshInfo(): void{
    this.routeSub = this.route.params.subscribe(params => {
      this.eventService.getEvent(params['eventId']).subscribe((data: EventModel) => {
        this.event = data;
        this.recipesList = data.dishesList;
        this.usersList = data.userList;
        console.log(data)
      })
    });
  }

}
