import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./shared/auth.guard.service";


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    /*children: [
      { path: 'my-books', component: MybooksComponent, canActivate: [AuthGuardService] },
      { path: 'my-loans', component: MyloansComponent, canActivate: [AuthGuardService] },
      { path: 'list-books', component: ListbooksComponent, canActivate: [AuthGuardService] },
      { path: 'add-book', component: AddbookComponent, canActivate: [AuthGuardService] },
    ]*/
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

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
