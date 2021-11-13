import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _rootUrl = "https://coctailapp.herokuapp.com"
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._rootUrl + '/users', user)
  }

  loginUser(user){
    return this.http.post<any>(this._rootUrl + '/login', user)
  }

}
