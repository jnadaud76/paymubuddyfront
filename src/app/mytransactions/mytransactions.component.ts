import {Component, OnInit} from '@angular/core';
import {TransactionModel} from "../shared/transaction.model";
import {Observable} from "rxjs";
import {TransactionService} from "../shared/transaction.service";
import {PersonModel} from "../shared/person.model";
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.scss']
})
export class MytransactionsComponent implements OnInit {
  transactions$!: Observable<TransactionModel[]>
  currentUser!: PersonModel
  pageNumber: number = 1

  constructor(private transactionService: TransactionService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
    this.transactions$ = this.transactionService.getUserTransactions(this.currentUser.id!);

  }
  refresh(): void {
    window.location.reload();
  }

}
