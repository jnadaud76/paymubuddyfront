import {PersonModel} from "./person.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
/*const httpOptions = {
  headers : new HttpHeaders( {'Content-Type': 'application/json'})
};*/
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  getAllPerson(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>('http://localhost:8080/persons');
  }

  getAllPossibleConnection(personId: number): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(`http://localhost:8080/possibleconnections?personId=${personId}`);
  }

  addConnection(personId: number, connectionId: number) : any {
    // @ts-ignore
    return this.http.put<any>(`http://localhost:8080/person/connection/add?personId=${personId}&connectionId=${connectionId}`);
  }
  getPersonById(personId: number): Observable<PersonModel> {
    return this.http.get<PersonModel>(`http://localhost:8080/person?personId=${personId}`);
  }

  getConnectionFromPerson(personId: number):  Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(`http://localhost:8080/connections?personId=${personId}`);
  }

 toIbanTransfer(personId: number, amount: number): any {
   // @ts-ignore
  return this.http.put<any>(`http://localhost:8080/toiban?personId=${personId}&amount=${amount}`);
 }

  fromIbanTransfer(personId: number, amount: number): any {
    // @ts-ignore
    return this.http.put<any>(`http://localhost:8080/fromiban?personId=${personId}&amount=${amount}`);
  }

}
