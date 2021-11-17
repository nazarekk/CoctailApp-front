import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = "http://localhost:8080"
  private token = null
  private email = null

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.rootUrl + '/users', user)
  }

  loginUser(user): Observable<{email: string, token: string}> {
    return this.http.post<{email: string, token: string}>(this.rootUrl + '/login', user)
      .pipe(
        tap(
          ({email,token}) => {
            localStorage.setItem('email', email)
            localStorage.setItem('auth-token', token)
            this.setEmail(email)
            this.setToken(token)
          }
        )
      )
  }

  setEmail(email: string){
    this.email = email
  }

  setToken(token: string){
    this.token = token
  }

  getEmail(): string{
    return this.email
  }

  getToken(): string{
    return this.token
  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  logout(){
    this.setToken(null)
    localStorage.clear()
  }
}
