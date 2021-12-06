import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IngrInfo} from "../Components/moderator/ingredient-list/IngredientModel";
import {Observable} from "rxjs";
import {KitchenwareInfo} from "../Components/moderator/kitchenware-list/KitchenwareModel";

@Injectable({
  providedIn: 'root'
})

export class SystemInventory {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  searchIngredient(name: String): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/moderator/ingredients?name=' + name);
  }

  removeIngredient(id: Number) {
    console.log(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
    return this.http.delete<any>(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
  }

  getIngredient(id: Number): Observable<IngrInfo> {
    return this.http.get<IngrInfo>(this.rootUrl + '/api/moderator/ingredients/' + id.toString());
  }

  editIngredient(ingredient) {
    return this.http.put(this.rootUrl + '/api/moderator/ingredients', ingredient);
  }

  listIngredient(): Observable<IngrInfo[]> {
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/moderator/ingredients/list');
  }

  addInrgedient(ingredient): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/moderator/ingredients', ingredient);
  }

  filterIngredient(type: String, category: String, active: Boolean): Observable<IngrInfo[]> {
    console.log(this.rootUrl + '/api/moderator/ingredients/filter?type='
      + type + "&category=" + category);
    return this.http.get<IngrInfo[]>(this.rootUrl + '/api/moderator/ingredients/filter?type='
      + type + "&category=" + category + "&active=" + active);
  }

  searchKitchenware(name: String): Observable<KitchenwareInfo[]> {
    return this.http.get<KitchenwareInfo[]>(this.rootUrl + '/api/moderator/kitchenware?name=' + name);
  }

  removeKitchenware(id: Number) {
    console.log(this.rootUrl + '/api/moderator/kitchenware/' + id.toString());
    return this.http.delete<any>(this.rootUrl + '/api/moderator/kitchenware/' + id.toString());
  }

  getKitchenware(id: Number): Observable<KitchenwareInfo> {
    return this.http.get<KitchenwareInfo>(this.rootUrl + '/api/moderator/kitchenware/' + id.toString());
  }

  editKitchenware(kitchenware) {
    return this.http.put(this.rootUrl + '/api/moderator/kitchenware', kitchenware);
  }

  listKitchenware(): Observable<KitchenwareInfo[]> {
    return this.http.get<KitchenwareInfo[]>(this.rootUrl + '/api/moderator/kitchenware/list');
  }

  addKitchenware(kitchenware): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/moderator/kitchenware', kitchenware);
  }

  filterKitchenware(type: String, category: String, active: Boolean): Observable<KitchenwareInfo[]> {
    console.log(this.rootUrl + '/api/moderator/kitchenware/filter?type='
      + type + "&category=" + category);
    return this.http.get<KitchenwareInfo[]>(this.rootUrl + '/api/moderator/kitchenware/filter?type='
      + type + "&category=" + category + "&active=" + active);
  }

}
