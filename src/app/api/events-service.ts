import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventModel} from "../Components/events/models/eventModel";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  createEvent(event): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/users/events', event);
  }

  editEvent(id: string, event): Observable<any> {
    return this.http.patch<any>(this.rootUrl + '/api/users/events/' + id, event);
  }

  join(id: string): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/users/join/' + id, {},{observe: 'response'});
  }

  leave(id: string): Observable<any> {
    return this.http.delete(this.rootUrl + '/api/users/leave/' + id, {observe: 'response'})
  }

  addDish(id: string, name: string): Observable<any> {
    console.log(this.rootUrl + '/api/users/events/' + id + "/recipe?name=" + name)
    return this.http.post<any>(this.rootUrl + '/api/users/events/' + id + "/recipe?name=" + name, {});
  }

  removeDish(id: string, name: string): Observable<Response> {
    return this.http.delete<Response>(this.rootUrl + '/api/users/events/' + id + "/recipe?name=" + name);
  }

  listEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.rootUrl + '/api/users/events/list');
  }

  getEvent(id: string): Observable<EventModel> {
    return this.http.get<EventModel>(this.rootUrl + '/api/users/events/' + id);
  }
}
