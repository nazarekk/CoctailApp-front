import {Component, Input, OnInit} from '@angular/core';
import {DishModel} from "../../dishModel";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  @Input() dish: DishModel;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  isModerator(): Boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR")
  }

  isUser(): Boolean {
    return (this.auth.getRole() == "ROLE_CONFIRMED")
  }

}
