import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {PersonComponent} from "./person/person.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {SinglePersonComponent} from "./single-person/single-person.component";
import { HeaderComponent } from './header/header.component';
import {AddconnectionComponent} from './addconnection/addconnection.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PersonComponent,
    PersonListComponent,
    SinglePersonComponent,
    RegistrationComponent,
    HeaderComponent,
    AddconnectionComponent,
    SendmoneyComponent,
    MytransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
