import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersonModel} from "./person.model";
import {Injectable} from "@angular/core";
import {TransactionModel} from "./transaction.model";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

 currentUser!: PersonModel

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.currentUser = this.loginService.currentUserValue
  }

  getAllTransactions() : Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>("http://localhost:8080/transactions")
  }

  getUserTransactions(senderId: number): Observable<TransactionModel[]> {
    //const headers=new HttpHeaders({Authorization : 'Basic '+ btoa(this.currentUser.email+":"+this.currentUser.password)})
    return this.http.get<TransactionModel[]>(`http://localhost:8080/transactions/sender?senderId=${senderId}`);
  }
}
