import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppModule} from "../../app.module";
import {ModeratorModule} from "../moderator/moderator.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from './events-list/events-list.component';



@NgModule({
  declarations: [
    CreateEventComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    ModeratorModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
