import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*currentUser: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }*/
}
