import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private rootUrl = "https://coctailapp.herokuapp.com"
  private token = null

  constructor(private http: HttpClient) {
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

  setToken(token: string) {
    this.token = token
  }

  static getToken(): string {
    return localStorage.getItem('token')
  }

  isAuthenticated(): boolean {
    return !!localStorage.token
  }

  static logout() {
    localStorage.setToken(null);
    localStorage.clear();
  }
}
