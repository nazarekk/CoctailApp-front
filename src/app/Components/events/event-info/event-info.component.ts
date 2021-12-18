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

  id: string
  event: EventModel
  usersList: UserForEventModel[] = []
  dishesList: DishForEventModel[] = []

  private routeSub: Subscription

  constructor(private route: ActivatedRoute,
              private eventService: EventsService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['eventId']
    });
    this.refreshInfo()
  }

  refreshInfo(): void{
    this.routeSub = this.route.params.subscribe(params => {
      this.eventService.getEvent(this.id).subscribe((data: EventModel) => {
        this.event = data;
        this.dishesList = data.recipeList;
        this.usersList = data.userList;
        console.log(data)
      })

    });
  }

  removeDish(): void{

  }

  join(): void{
    this.eventService.join(this.id);
    this.refreshInfo()
  }

  leave(): void{
    this.eventService.leave(this.id);
    this.refreshInfo()
  }

}
