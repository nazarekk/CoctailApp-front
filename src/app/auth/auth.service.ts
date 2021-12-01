import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {moderInfo} from "../Components/moderator-list-info/moderList.model";
import {userInfo} from "../user-profile/userProfile.model";

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

  loginUser(user): Observable<{ token: string, role: string }> {
    return this.http.post<{ token: string, role: string }>(this.rootUrl + '/api/auth/login', user)
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

  static getRole(): string {
    return localStorage.getItem('role')
  }

  static logout() {
    localStorage.clear();
  }

  getUserInfo(): Observable<userInfo[]> {
    return this.http.get<userInfo[]>(this.rootUrl + '/api/users/info');
  }


  getModerInfo(): Observable<moderInfo[]> {
    return this.http.get<moderInfo[]>(this.rootUrl + '/api/admin/moderators');
  }

  deleteModer(id) {
    return this.http.delete(`${this.rootUrl}/moderators/remove/${id}`);
  }


}
