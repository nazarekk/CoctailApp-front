import {Injectable, NgModule, OnInit, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthInterceptor} from "./auth-interceptor";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private static token = null
  private static role = null
  private rootUrl = "http://localhost:8080"
  private token = null

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    return this.http.post<any>(this.rootUrl + '/api/users', user)
  }

  loginUser(user): Observable<{ token: string , role: string}> {
    return this.http.post<{ token: string, role: string}>(this.rootUrl + '/api/auth/login', user)
      .pipe(
        tap(
          ({token, role}) => {
            localStorage.setItem('token', token)
            localStorage.setItem('role', role)
          }
        )
      )
  }

  registerModerator(user) {
    return this.http.post<any>(this.rootUrl + '/api/admin/moderators', user)
  }

  verificateModerator(user) {
    return this.http.post<any>(this.rootUrl + 'api/moderator/activation', user)
  }

  editModerator(user) {
    return this.http.post<any>(this.rootUrl + '/api/admin/moderator/edit', user)
  }

  verifyUser(code: string) {
    console.log((this.rootUrl + '/api/users/activation?code=' + code))
    return this.http.get<any>(this.rootUrl + '/api/users/activation?code=' + code).subscribe(
      res => console.log(res)
    )
  }

  setToken(token: string) {
    this.token = token
  }

  static getToken(): string {
    return localStorage.getItem('token')
  }

  static getRole(): string{
    return localStorage.getItem('role')
  }


  searchFriend (nickname: String) {
    return this.http.get<any>(this.rootUrl + '/api/users/find/'+ nickname).subscribe(data => console.log(data));
  }

  isAuthenticated(): boolean {
    return !!localStorage.token

  static logout() {
    localStorage.setToken(null);
    localStorage.clear();
  }
}
