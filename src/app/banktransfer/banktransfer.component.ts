import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../shared/person.model";
import {LoginService} from "../shared/login.service";
import {PersonService} from "../shared/person.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-banktransfer',
  templateUrl: './banktransfer.component.html',
  styleUrls: ['./banktransfer.component.scss']
})
export class BanktransferComponent implements OnInit {
  currentUser!: PersonModel
  amountToBank!: number
  amountFromBank!: number
  controlToBank= new FormControl('', [Validators.required]);
  controlFromBank = new FormControl('', [Validators.required]);

  constructor(private loginService: LoginService, private personService : PersonService) { }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
  }

  toBank(){
   this.personService.toIbanTransfer(this.currentUser.id!, this.amountToBank).subscribe();
    if (this.currentUser.amountAvailable! >= 0 && this.amountToBank>0 && this.currentUser.amountAvailable! >= this.amountToBank) {
      this.currentUser.amountAvailable = this.currentUser.amountAvailable! - this.amountToBank;
    } else if (this.currentUser.amountAvailable! >= 0 && this.currentUser.amountAvailable! < this.amountToBank) {
      this.currentUser.amountAvailable=this.currentUser.amountAvailable!;
    }
    else {
      this.currentUser.amountAvailable = 0;
    }
    let newCurrentUserData = JSON.stringify(this.currentUser)
    localStorage.setItem("currentUser", newCurrentUserData)
  }


  fromBank(){
    this.personService.fromIbanTransfer(this.currentUser.id!, this.amountFromBank).subscribe();
    if (this.amountFromBank>0) {
      (this.currentUser.amountAvailable!)+=this.amountFromBank;
    } else {
      this.currentUser.amountAvailable=this.currentUser.amountAvailable!;
    }
    let newCurrentUserData = JSON.stringify(this.currentUser)
    localStorage.setItem("currentUser", newCurrentUserData)
  }

}
