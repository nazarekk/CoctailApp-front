import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  registerUser(user) {
    return this.http.post<any>(this.rootUrl + '/api/users', user)
  }

  loginUser(user): Observable<{ token: string , role: string}> {
    return this.http.post<{ token: string, role: string}>(this.rootUrl + '/api/auth/login', user)
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
    return this.http.post<any>(this.rootUrl + '/api/moderator/activation', user)
  }

  editModerator(user) {
    return this.http.post<any>(this.rootUrl + '/api/admin/moderator/edit', user)
  }

  verifyUser(verifyUser) {
    return this.http.patch<any>(this.rootUrl + '/api/users/activation', verifyUser).subscribe(
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

  static getToken(): string {
    return localStorage.getItem('token')
  }

  getRole(): string {
    if (this.getToken() == null) return null;
    let jwtData = this.getToken().split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let role = decodedJwtData.roles
    return role.toString();
  }


  searchFriend(nickname: String) {
    return this.http.get<any>(this.rootUrl + '/api/users/find?nickname=' + nickname);
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
    return this.http.patch<any>(this.rootUrl + '/api/users/subscribe/' + id, "")
  }

  isAuthenticated(): boolean {
    return !!localStorage.token
  }

  static logout() {
    localStorage.clear();
  }

}
