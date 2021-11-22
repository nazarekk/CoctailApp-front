import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = "http://localhost:8080"
  private static token = null

  constructor(private http: HttpClient,
              private router: Router) { }

  registerUser(user){
    return this.http.post<any>(this.rootUrl + '/api/users', user)
  }

  loginUser(user): Observable<{token: string}> {
    return this.http.post<{token: string}>(this.rootUrl + '/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('token', token)
            sessionStorage.setToken(token)
          }
        )
      )
  }

  registerModerator(user){
    return this.http.post<any>(this.rootUrl + '/api/admin/moderators', user)
  }

  verificateModerator(user){
    return this.http.post<any>(this.rootUrl + 'api/moderator/activation', user)
  }

  editModerator(user){
    return this.http.post<any>(this.rootUrl + '/api/admin/moderator/edit', user)
  }

  private setToken(token: string){
    sessionStorage.setItem(AuthService.token, token)
  }

  static getToken(): string{
    return sessionStorage.getItem(AuthService.token)
  }

  isAuthenticated(): boolean{
    return !!sessionStorage.token
  }

  logout(){
    sessionStorage.setToken(null);
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
