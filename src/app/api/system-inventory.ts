import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IngrInfo} from "../Components/moderator/ingredient-list/IngredientModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SystemInventory {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  searchIngredient (name: String): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/moderator/ingredients?name='+ name);
  }

  removeIngredient (id: Number) {
    console.log(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
    return this.http.delete<any>(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
  }

  getIngredient (id: Number): Observable<IngrInfo> {
    return this.http.get<IngrInfo>(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
  }

  editIngredient (ingredient) {
    return this.http.patch(this.rootUrl + '/api/moderator/ingredients/edit', ingredient);
  }

  listIngredient (): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/moderator/ingredients/list');
  }

  addInrgedient(ingredient): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/moderator/ingredients', ingredient);
  }

}
