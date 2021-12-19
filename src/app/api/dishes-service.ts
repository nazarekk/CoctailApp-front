import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DishModel} from "../Components/dishes/dishModel";

@Injectable({
  providedIn: 'root'
})

export class DishesService {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  listDishes(): Observable<DishModel[]> {
    return this.http.get<DishModel[]>(this.rootUrl + '/api/users/recipe/list');
  }

  getDishes(id: Number): Observable<DishModel> {
    return this.http.get<DishModel>(this.rootUrl + '/api/users/recipe/' + id.toString());
  }

  addDish(dish): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/moderator/recipe', dish);
  }

  addIngredient(id: Number, name: String): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/moderator/recipe/' + id.toString() + "/ingredients?name=" + name, {observe: 'response'});
  }

  removeIngredient(id: Number, name: String): Observable<Response> {
    return this.http.delete<Response>(this.rootUrl + '/api/moderator/recipe/' + id.toString() + "/ingredients?name=" + name);
  }

  editDish(dish) {
    return this.http.put<any>(this.rootUrl + '/api/moderator/recipe', dish,{observe: "response"});
  }

  removeDish(id: number): Observable<any> {
    return this.http.delete(this.rootUrl + '/api/moderator/recipe/' + id.toString(),{observe: 'response'})
  }

  likeDish(id: number, like: Boolean) {
    return this.http.patch(this.rootUrl + '/api/users/recipe/' + id.toString() + '?like=' + like.valueOf(),"",{observe:"response"})
  }

  favouriteDish(id: number, like: Boolean) {
    return this.http.patch(this.rootUrl + '/api/users/recipe/favourites/' + id.toString() + '?favourite=' + like.valueOf(),"",{observe:"response"})
  }

  searchDishes(name: String): Observable<DishModel[]> {
    return this.http.get<DishModel[]>(this.rootUrl + '/api/users/recipe?name=' + name);
  }

  filterDishes(sugarless: String, alcohol: String): Observable<DishModel[]> {
    return this.http.get<DishModel[]>(this.rootUrl + '/api/users/recipe/filter?sugarless=' + sugarless + '&alcohol=' + alcohol);
  }

  suggestedDishes(): Observable<DishModel[]> {
    return this.http.get<DishModel[]>(this.rootUrl + '/api/users/recipe/suggestion');
  }

  favouritesDishes(): Observable<DishModel[]> {
    return this.http.get<DishModel[]>(this.rootUrl + '/api/users/recipe/favourites');
  }
}
