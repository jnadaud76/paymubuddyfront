import { Component, OnInit } from '@angular/core';
import {LoginService} from "../shared/login.service";
import {PersonModel} from "../shared/person.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser!: PersonModel

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
   /*if (localStorage.getItem('currentUser')) {
     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
   }*/
  }
 /*onLogout(){
    this.loginService.logout();
 }*/
}
