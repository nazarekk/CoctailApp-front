import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IngrInfo} from "../Components/moderator/ingredient-list/IngredientModel";

@Injectable({
  providedIn: 'root'
})

export class UserInventoryService {
  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  listIngredient(): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/stock/my');
  }

  searchIngredient(name: String): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/ingredients?name=' + name);
  }

  allIngredients(): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/ingredients/list');
  }

  addToStock(id: number): Observable<any> {
    return this.http.post(this.rootUrl + '/api/users/stock/ingredients?ingredientId=' + id.toString() + "&quantity=1",{observe:"response"});
  }

  removeFromStock(id: number): Observable<any> {
    return this.http.delete(this.rootUrl + '/api/users/stock/' + id.toString(),{observe:"response"});
  }
}
