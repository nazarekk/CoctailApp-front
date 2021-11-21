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

  constructor(private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.rootUrl + '/api/users', user)
  }

  loginUser(user): Observable<{token: string}> {
    return this.http.post<{token: string}>(this.rootUrl + '/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  registerModerator(user){
    return this.http.post<any>(this.rootUrl + '/api/admin/moderators', user)
  }

  verificateModerator(user){
    return this.http.post<any>(this.rootUrl + '/api/moderator/activation', user)
  }

  editModerator(user){
    return this.http.post<any>(this.rootUrl + '/api/admin/moderator/edit', user)
  }

  verifyUser(code: string){
    console.log((this.rootUrl + '/api/users/activation?code=' + code))
    return this.http.get<any>(this.rootUrl + '/api/users/activation?code=' + code).subscribe(
      res=>console.log(res)
    )
  }

  setToken(token: string){
    this.token = token
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
