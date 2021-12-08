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

  addInrgedient(id: Number, name: String): Observable<Response> {
    return this.http.post<Response>(this.rootUrl + '/api/moderator/recipe/' + id.toString() + "/ingredients?name=" + name, "");
  }

  removeInrgedient(id: Number, name: String): Observable<Response> {
    return this.http.delete<Response>(this.rootUrl + '/api/moderator/recipe/' + id.toString() + "/ingredients?name=" + name);
  }

  editDish(dish): Observable<any> {
    return this.http.put<any>(this.rootUrl + '/api/moderator/recipe', dish);
  }
}
