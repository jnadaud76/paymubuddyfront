import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
