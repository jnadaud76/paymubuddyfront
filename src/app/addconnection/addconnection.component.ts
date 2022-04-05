import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PersonModel} from "../shared/person.model";
import {LoginService} from "../shared/login.service";
import {PersonService} from "../shared/person.service";
import {FormControl} from "@angular/forms";


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
  ) {
  }

  ngOnInit(): void {
    this.currentUser = this.loginService.currentUserValue;
    this.connections$ = this.personService.getAllPossibleConnection(this.currentUser.id!)
    this.connection = new FormControl();
  }

  onSubmit() {
    this.personId = this.currentUser.id!;
    this.connectionId = this.connection.value;
    console.log(this.personId, this.connectionId);
    this.personService.addConnection(this.personId, this.connectionId).subscribe();
  }

}
