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

  join(id: string): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/api/users/join/' + id, {observe: 'response'});
  }

  leave(id: string): Observable<any> {
    return this.http.delete(this.rootUrl + '/api/users/leave/' + id, {observe: 'response'})
  }

  listEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.rootUrl + '/api/users/events/list');
  }

  getEvent(id: string): Observable<EventModel> {
    return this.http.get<EventModel>(this.rootUrl + '/api/users/events/' + id);
  }
}
