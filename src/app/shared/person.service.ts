import {PersonModel} from "./person.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const httpOptions = {
  headers : new HttpHeaders( {'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getAllPerson(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>('http://localhost:8080/persons');
  }

  getPersonById(personId: number): Observable<PersonModel> {
    return this.http.get<PersonModel>(`http://localhost:8080/person?${personId}`);
  }
}
