import {Component, OnInit} from '@angular/core';
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {}

  onLogout() {
    this.loginService.logout();
  }


}
