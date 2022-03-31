import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./shared/auth.guard.service";
import {AddconnectionComponent} from "./addconnection/addconnection.component";
import {HeaderComponent} from "./header/header.component";
import {SendmoneyComponent} from "./sendmoney/sendmoney.component";
import {MytransactionsComponent} from "./mytransactions/mytransactions.component";


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    /*children: [
      { path: 'header', component: HeaderComponent},
      { path: 'sendmoney', component: SendmoneyComponent},
      { path: 'mytransactions', component: MytransactionsComponent},
    ]*/
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path : 'addconnection', component: AddconnectionComponent},
  { path: '', redirectTo: 'dashboard', pathMatch:'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
