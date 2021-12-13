import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventModel} from "../Components/events/eventModel";
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
}
