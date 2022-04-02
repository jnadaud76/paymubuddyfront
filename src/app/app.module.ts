import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import {AddconnectionComponent} from './addconnection/addconnection.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { MytransactionsComponent } from './mytransactions/mytransactions.component';
import {NgxPaginationModule} from "ngx-pagination";
import { BanktransferComponent } from './banktransfer/banktransfer.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    AddconnectionComponent,
    SendmoneyComponent,
    MytransactionsComponent,
    BanktransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }
      ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
