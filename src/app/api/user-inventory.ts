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

  searchAllIngredient(name: String): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/ingredients/search?name=' + name.toString());
  }

  searchIngredient(name: String): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/stock/search?name=' + name.toString());
  }

  allIngredients(): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/ingredients/list');
  }

  addToStock(id: number, quantity: number): Observable<any> {
    return this.http.post(this.rootUrl + '/api/users/stock/ingredients?ingredientId=' + id + "&quantity=" + quantity,
      "",{observe:"response"});
  }

  removeFromStock(id: number): Observable<any> {
    return this.http.delete(this.rootUrl + '/api/users/stock/' + id.toString(),{observe:"response"});
  }

  editStock(id: number, quantity: number): Observable<any> {
    return this.http.patch(this.rootUrl + '/api/users/stock/edit?ingredientId=' + id + "&quantity=" + quantity,
      "",{observe:"response"});
  }

  filterIngredient(type: String, category: String, active: Boolean): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/stock/filter?type='
      + type + "&category=" + category + "&active=" + active);
  }

  filterAllIngredient(type: String, category: String, active: Boolean): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/users/ingredients/filter?type='
      + type + "&category=" + category + "&active=" + active);
  }
}
