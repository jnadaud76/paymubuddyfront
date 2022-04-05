import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message: any;

  constructor(
    private router: Router, private loginService: LoginService) {
  }

  ngOnInit() : void{}

  onLogin() {
    let resp = this.loginService.login(this.username, this.password);

    resp.subscribe(data => {
      this.message = data;
      this.loginService.saveCurrentUser(this.username).subscribe(() => {
        this.router.navigate(['/dashboard'])
      });
    });
  }

  logOut() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
  }
}





