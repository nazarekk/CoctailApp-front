import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _rootUrl = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._rootUrl + '/api/users', user)
  }

  loginUser(user){
    return this.http.post<any>(this._rootUrl + '/api/auth/login', user)
  }

}
