import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {IngrInfo} from "../Components/moderator/ingredient-list/IngredientModel";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    return this.http.post<any>(this.rootUrl + '/api/users', user)
  }

  loginUser(user): Observable<{ token: string}> {
    return this.http.post<{ token: string}>(this.rootUrl + '/api/auth/login', user)
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
    return this.http.patch<any>(this.rootUrl + '/api/users/activation' ,verifyUser).subscribe(
      res => console.log(res)
    )
  }

  getToken(): string {
    return localStorage.getItem('token')
  }

  getRole(): string{
      let jwtData = this.getToken().split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let role = decodedJwtData.roles

      console.log('Is admin: ' + role);
      return role.toString();
  }


  searchFriend (nickname: String) {
    return this.http.get<any>(this.rootUrl + '/api/users/find?nickname='+ nickname);
  }

  searchIngredient (name: String) {
    return this.http.get<any>(this.rootUrl + '/api/moderator/ingredients/search?name='+ name);
  }

  removeIngredient (id: Number) {
    return this.http.delete<any>(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
  }

  getIngredient (id: Number) {
    return this.http.get<any>(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
  }

  addFriend (id: Number) {
    return this.http.post<any>(this.rootUrl + '/api/users/add/' + id, "")
  }

  acceptFriend (id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/accept/' + id, "")
  }

  declineFriend (id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/decline/' + id, "")
  }

  removeFriend (id: Number) {
    return this.http.delete<any>(this.rootUrl + '/api/users/remove/' + id)
  }

  editIngredient (ingredient) {
    return this.http.patch(this.rootUrl + '/api/moderator/ingredients/edit', ingredient);
  }

  listIngredient () {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/moderator/ingredients/list');
  }

  addInrgedient(ingredient) {
    return this.http.post<any>(this.rootUrl + '/api/moderator/ingredients', ingredient);
  }

  subscribeFriend (id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/subscribe/' + id, "")
  }

  unsubscribeFriend (id: Number) {
    return this.http.patch<any>(this.rootUrl + '/api/users/subscribe/' + id, "")
  }

  isAuthenticated(): boolean {
    return !!localStorage.token
  }

  static logout() {
    localStorage.clear();
  }
}
