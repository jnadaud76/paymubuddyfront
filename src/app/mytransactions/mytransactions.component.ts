import { Component, OnInit } from '@angular/core';
import {TransactionModel} from "../shared/transaction.model";
import {filter, Observable} from "rxjs";
import {TransactionService} from "../shared/transaction.service";
import {PersonModel} from "../shared/person.model";
import {LoginService} from "../shared/login.service";
import {PersonService} from "../shared/person.service";

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.scss']
})
export class MytransactionsComponent implements OnInit {
  transactions$!: Observable<TransactionModel[]>
  currentUser!: PersonModel
  //recipient$!: Observable<PersonModel[]>
  pageNumber: number = 1

  constructor(private transactionService: TransactionService, private loginService: LoginService, private personService: PersonService) { }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
          //this.transactions$ = this.transactionService.getUserTransactions(this.currentUser.personFullDtoId!);
    this.transactions$ = this.transactionService.getUserTransactions(this.currentUser.id!);
      //this.recipient$ = this.personService.getAllPerson();
  }

 /* handlePageChange(e) {
    this.pageNumber = event;
  }*/

}
