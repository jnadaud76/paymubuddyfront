import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../shared/person.model";
import {filter, Observable, pipe} from "rxjs";
import {TransactionService} from "../shared/transaction.service";
import {LoginService} from "../shared/login.service";
import {PersonService} from "../shared/person.service";
import {TransactionModel} from "../shared/transaction.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss']
})
export class SendmoneyComponent implements OnInit {
  currentUser!: PersonModel
  sendMoneyForm!: FormGroup
  userConnection$!: Observable<PersonModel[]>
  balance: number = 0
  transaction : TransactionModel = {
    recipient: 0,
    sender: 0,
    amount: 0,
    description:''
  }
  //amountToSend!: number
 // selected = "----"
  //selected! : number

  constructor(private transactionService: TransactionService,
              private personService: PersonService,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
   // this.balance = this.currentUser.amountAvailable!;
    this.userConnection$ = this.personService.getConnectionFromPerson(this.currentUser.id!);
    console.log(this.userConnection$.subscribe);
    this.sendMoneyForm = this.formBuilder.group({
      recipient: [0, Validators.required],
      sender: [this.currentUser.id, Validators.required],
      amount: [0,  [Validators.required, Validators.min(10), Validators.max(1000)]],
      description: [null],

    })


  }

  onPay() {
    this.transaction = {

      recipient: this.sendMoneyForm.value.recipient,
      sender: this.currentUser.id!,
      amount: this.sendMoneyForm.value.amount,
      description: this.sendMoneyForm.value.description
    }

    this.transactionService.saveTransaction(this.transaction).subscribe();
    if (this.currentUser.amountAvailable! >= 0 && this.currentUser.amountAvailable! >= this.sendMoneyForm.value.amount) {
      this.currentUser.amountAvailable = this.currentUser.amountAvailable! - this.sendMoneyForm.value.amount;
    } else if (this.currentUser.amountAvailable! >= 0 && this.currentUser.amountAvailable! < this.sendMoneyForm.value.amount) {
      this.currentUser.amountAvailable=this.currentUser.amountAvailable!;
    }
     else {
      this.currentUser.amountAvailable = 0;
    }
    let newCurrentUserData = JSON.stringify(this.currentUser)
    localStorage.setItem("currentUser", newCurrentUserData)
  }

  onTransferBank() {
    this.router.navigate(['/banktransfer']);
  }

  update(e: any){
    this.sendMoneyForm.value.recipient = e.target.id

    // this.sendMoneyForm.value.recipient = e.target.Value.getValue().id

  }





 /* update(e: any) {

    this.selected = e.target.value;
  }*/

  onAddConnection() {
 this.router.navigateByUrl('addconnection');
  }
}


