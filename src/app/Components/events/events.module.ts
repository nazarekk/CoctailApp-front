import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppModule} from "../../app.module";
import {ModeratorModule} from "../moderator/moderator.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import {EventsComponent} from "./events-list/events/events.component";
import { EventInfoComponent } from './event-info/event-info.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CreateEventComponent,
    EventsListComponent,
    EventsComponent,
    EventInfoComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    ModeratorModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class EventsModule { }
