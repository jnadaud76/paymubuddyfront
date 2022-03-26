import { Component, OnInit } from '@angular/core';
import {LoginService} from "../shared/login.service";
import {PersonModel} from "../shared/person.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 // @ts-ignore
  currentUser: PersonModel

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }
 onLogout(){
    this.loginService.logout();
 }
}
