import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public isAdmin(): boolean {
    return (this.auth.getRole() == "ROLE_ADMIN");
  }

  public isModerator(): boolean {
    return (this.auth.getRole() == "ROLE_MODERATOR");
  }

  public isUser(): boolean {
    return (this.auth.getRole() == "ROLE_CONFIRMED");
  }

  search(searchValue: String) {
    this.searchEvent.emit(searchValue)
  }

  Logout() {
    AuthService.logout();
  }

}
