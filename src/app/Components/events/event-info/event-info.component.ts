import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {EventModel} from "../models/eventModel";
import {EventsService} from "../../../api/events-service";
import {Subscription} from "rxjs";
import {UserForEventModel} from "../models/userForEventModel";
import {DishForEventModel} from "../models/dishForEventModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  formForDish: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['eventId']
    });
    this.formForDish = this.fb.group({
      dishName: ['', [Validators.required]]})
    this.refreshInfo()
  }

  edit(name: string, eventTime: string) {
    this.event.name = name;
    this.event.eventTime = new Date(eventTime);
    console.log(this.event)
    this.eventsService.editEvent(this.id, this.event).subscribe(data => this.refreshInfo())
  }

  submitDish(){
    this.addDish(this.formForDish.value['dishName'])
    this.formForDish.reset()
  }

  refreshInfo(): void{
    this.routeSub = this.route.params.subscribe(params => {
      this.eventsService.getEvent(this.id).subscribe((data: EventModel) => {
        this.event = data;
        this.dishesList = data.recipeList;
        this.usersList = data.userList;
        console.log(data)
      })

    });
  }

  addDish(name: string): void{
    this.eventsService.addDish(this.id, name).subscribe(data => this.refreshInfo())
  }

  removeDish(name: string): void{
    this.eventsService.removeDish(this.id,name).subscribe(data => this.refreshInfo())
  }

  join(): void{
    this.eventsService.join(this.id).subscribe(data => this.refreshInfo())
  }

  leave(): void{
    this.eventsService.leave(this.id).subscribe(data => this.refreshInfo())
  }

}
