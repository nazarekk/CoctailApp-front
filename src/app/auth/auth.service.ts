import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {UserPersonalInfo} from "../settings/UserPersonalInfo";
import {JwtToken} from "../Interfaces/JwtToken";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private static role = null
  private rootUrl = "http://localhost:8080"//"https://coctailapp.herokuapp.com"
  private token = null

  constructor(private http: HttpClient) {
  }


  refreshToken(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer_' + this.getToken()
      })
    };

    return this.http.post<JwtToken>(this.rootUrl + '/api/auth/refresh-token', {}, httpOptions)
      .pipe(
        tap((token: JwtToken) => {
          localStorage.removeItem('token')
          localStorage.setItem('token', token.token);
          this.setToken(token.token);
        })
      );
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

  verifyUser(code: string) {
    console.log((this.rootUrl + '/api/users/activation?code=' + code))
    return this.http.get<any>(this.rootUrl + '/api/users/activation?code=' + code).subscribe(
      res => console.log(res)
    )
  }

  changePassword(user) {
    return this.http.put<any>(this.rootUrl + '/api/users/settings', user, {observe: 'response'})
  }

  changeInfo(user) {
    return this.http.put<any>(this.rootUrl + '/api/users/settings/edit', user, {observe: 'response'})
  }

  getInformation(): Observable<UserPersonalInfo> {
    return this.http.get<any>(this.rootUrl + '/api/users/settings/edit')
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    this.token = localStorage.getItem('token')
    return this.token
  }

  static getRole(): string {
    return localStorage.getItem('role')
  }

  static logout() {
    localStorage.clear();
  }
}
