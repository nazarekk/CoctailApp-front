import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  registerUser(user: User){
    const body : User = {
      email: user.email,
      password: user.password,
      repeatPassword: user.repeatPassword
    }
    return this.http.post<any>(this.rootUrl + '', body)
  }
}
