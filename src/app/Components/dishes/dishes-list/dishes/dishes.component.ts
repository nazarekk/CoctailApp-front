import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DishModel} from "../../dishModel";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  @Input() dish: DishModel;
  @Output() likeEvent: EventEmitter<any> = new EventEmitter()
  @Output() favouriteEvent: EventEmitter<any> = new EventEmitter()

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  isModerator(): Boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR")
  }

  isUser(): Boolean {
    return (this.auth.getRole() == "ROLE_CONFIRMED")
  }

  like() {
    this.likeEvent.emit(this.dish);
  }

  favourite() {
    this.favouriteEvent.emit(this.dish)
  }

}
