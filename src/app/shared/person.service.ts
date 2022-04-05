import {PersonModel} from "./person.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {

  }

  getAllPerson(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>('api/persons');
  }

  getAllPossibleConnection(personId: number): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(`api/possibleconnections?personId=${personId}`);
  }

  addConnection(personId: number, connectionId: number): any {
    // @ts-ignore
    return this.http.put<any>(`api/person/connection/add?personId=${personId}&connectionId=${connectionId}`);
  }

  getPersonById(personId: number): Observable<PersonModel> {
    return this.http.get<PersonModel>(`api/person?personId=${personId}`);
  }

  getConnectionFromPerson(personId: number): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(`api/connections?personId=${personId}`);
  }

  toIbanTransfer(personId: number, amount: number): any {
    // @ts-ignore
    return this.http.put<any>(`api/toiban?personId=${personId}&amount=${amount}`);
  }

  fromIbanTransfer(personId: number, amount: number): any {
    // @ts-ignore
    return this.http.put<any>(`api/fromiban?personId=${personId}&amount=${amount}`);
  }

}
