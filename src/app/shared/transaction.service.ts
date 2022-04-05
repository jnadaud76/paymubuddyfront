import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TransactionModel} from "./transaction.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http: HttpClient) {

  }

  getAllTransactions(): Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>("api/transactions")
  }

  getUserTransactions(senderId: number): Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>(`api/transactions/sender?senderId=${senderId}`);
  }

  saveTransaction(transaction: TransactionModel): any {
    return this.http.post('api/transaction', transaction);
  }
}
