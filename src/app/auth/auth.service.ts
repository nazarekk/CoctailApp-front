import {Injectable, NgModule, OnInit, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthInterceptor} from "./auth-interceptor";
import {UserInfo} from "../Components/auth-user/SearchUser/user-model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private rootUrl = "http://localhost:8080"
  private static token = null
  private http: HttpClient
  private router: Router

  constructor() {
  }

  registerUser(user) {
    return this.http.post<any>(this.rootUrl + '/api/users', user)
  }

  loginUser(user): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.rootUrl + '/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('token', token)
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

  private setToken(token: string) {
    localStorage.setItem('token', token)
  }

  static getToken(): string {
    return localStorage.getItem('token')
  }

  searchFriend (nickname: String) {
    return this.http.get<any>(this.rootUrl + '/api/users/find/'+ nickname).subscribe(data => console.log(data));
  }

  isAuthenticated(): boolean {
    return !!localStorage.token
  }

  static logout() {
    localStorage.setToken(null);
    localStorage.clear();
  }
}
