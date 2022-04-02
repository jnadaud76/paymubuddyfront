import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TransactionModel} from "../shared/transaction.model";
import {PersonModel} from "../shared/person.model";
import {LoginService} from "../shared/login.service";
import {PersonService} from "../shared/person.service";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addconnection',
  templateUrl: './addconnection.component.html',
  styleUrls: ['./addconnection.component.scss']
})
export class AddconnectionComponent implements OnInit {
  connections$!: Observable<PersonModel[]>
  currentUser!: PersonModel
  connection!: FormControl
  personId!: number
  connectionId!: number

  constructor(private loginService: LoginService,
              private personService: PersonService,
              private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
    this.connections$ = this.personService.getAllPossibleConnection(this.currentUser.id!)
    this.connection= new FormControl();
    //this.transactionService.saveTransaction(this.transaction).subscribe();
  }

  /*update (e:any) {
  this.connection = e.target.value;
  }*/

  onSubmit() {
    this.personId = this.currentUser.id!;
    this.connectionId = this.connection.value;
    console.log(this.personId, this.connectionId);
    this.personService.addConnection(this.personId, this.connectionId).subscribe();
  }

}
