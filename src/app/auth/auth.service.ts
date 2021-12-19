import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {UserPersonalInfo} from "../Interfaces/UserPersonalInfo";
import {JwtToken} from "../Interfaces/JwtToken";
import {UserInfo} from "../Components/auth-user/search-friend/user-model";
import {moderInfo} from "../Components/moderator-list-info/moderList.model";
import {userInfo} from "../user-profile/userProfile.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private static role = null
  private rootUrl = environment.apiUrl;
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
            localStorage.removeItem('_grecaptcha')
            localStorage.setItem('token', token)
          }
        )
      )
  }

  registerModerator(user) {
    return this.http.post<any>(this.rootUrl + '/api/admin/moderators', user, {observe: "response"})
  }

  verificationModerator(user) {
    return this.http.post<any>(this.rootUrl + '/api/moderator/activation', user)
  }

  editModerator(user) {
    return this.http.patch<any>(this.rootUrl + '/api/admin/moderator/edit', user)
  }

  verifyUser(verifyUser) {
    return this.http.patch<any>(this.rootUrl + '/api/users/activation', verifyUser, {observe: "response"})
  }

  changePassword(user) {
    return this.http.put<any>(this.rootUrl + '/api/users/settings', user, {observe: 'response'})
  }

  changeInfo(user) {
    return this.http.patch<any>(this.rootUrl + '/api/users/settings/edit', user, {observe: 'response'})
  }

  getInformation(): Observable<UserPersonalInfo> {
    return this.http.get<any>(this.rootUrl + '/api/users/settings/edit')
  }

  changePhoto(user) {
    return this.http.put<any>(this.rootUrl + '/api/users/settings/edit', user, {observe: 'response'})
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    this.token = localStorage.getItem('token')
    return this.token
  }

  getRole(): string {
    if (this.getToken() == null) return null;
    let jwtData = this.getToken().split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let role = decodedJwtData.role
    return role.toString();
  }


  searchFriend(nickname: String): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.rootUrl + '/api/users/find?nickname=' + nickname);
  }

  friendList(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.rootUrl + '/api/users/friendlist');
  }

  static getRole(): string {
    return localStorage.getItem('role')
  }

  addFriend(id: Number) {
    return this.http.post<any>(this.rootUrl + '/api/users/add/' + id, "")
  }

  acceptFriend(id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/accept/' + id, "")
  }

  declineFriend(id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/decline/' + id, "")
  }

  removeFriend(id: Number) {
    return this.http.delete<any>(this.rootUrl + '/api/users/remove/' + id)
  }

  subscribeFriend(id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/subscribe/' + id, "")
  }

  unsubscribeFriend(id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/unsubscribe/' + id, "")
  }

  isAuthenticated(): boolean {
    return !!localStorage.token
  }

  static logout() {
    localStorage.clear();
    location.href = "#"
  }

  getUserInfo(): Observable<userInfo> {
    return this.http.get<userInfo>(this.rootUrl + '/api/users/info');
  }


  getModerInfo(): Observable<moderInfo[]> {
    return this.http.get<moderInfo[]>(this.rootUrl + '/api/admin/moderators');
  }

  deleteModer(moder: moderInfo): Observable<any> {
    return this.http.delete<moderInfo>(`${this.rootUrl}/api/admin/moderators/remove`,{body: moder,observe:"response"});
  }

  getInfoById(id): Observable<moderInfo>{
    return this.http.get<moderInfo>(`${this.rootUrl}/api/admin/users/${id}`);
  }



}
