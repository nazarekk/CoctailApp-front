import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventModel} from "../eventModel";
import {EventsService} from "../../../api/events-service";
import {DishModel} from "../../dishes/dishModel";

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  event: EventModel

  constructor(private route: ActivatedRoute,
              private eventService: EventsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('eventId');
    this.eventService.getEvent().subscribe((data: EventModel) => this.event = data)
  }

}
