import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PersonModel} from "../shared/person.model";
import{LoginService} from "../shared/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthModel} from "../shared/auth.model";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  //model: any = {}
 /* user: PersonModel = {
    email: '',
    password: ''
  }*/

  //auth!: AuthModel;
  username!: string;
  password!: string;
  //loginForm!: FormGroup;
  //login$! : Observable<AuthModel>;

  constructor(
    private router: Router, private loginService: LoginService, private formBuilder : FormBuilder
   ) {
  }

  ngOnInit() {
    //sessionStorage.setItem();
    /*this.loginForm = this.formBuilder.group({
      username: [null,[Validators.required]],
      password: [null,[Validators.required]],
    },{
      updateOn: 'blur'
    });
    this.login$ = this.loginForm.valueChanges;*/
  }

  onLogin() {
  let resp= this.loginService.login(this.username,this.password)
 /* resp.subscribe(data =>{
           this.router.navigate(['/dashboard']);*/
    resp.subscribe()
    this.router.navigate(['/dashboard']);
   /* let user = this.loginService.getCurrentUser()
    sessionStorage.setItem('currentuser', JSON.stringify(user))*/
 // })
  }



logOut() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
 }
}
 /* onLogin() {
    this.loginService.login(this.user).subscribe(() => {
        this.router.navigateByUrl('/dashboard');
      }, () => {
        alert('erreur d\'authentification');
      }
    )
  }
}*/
 /* onLogin() {
    let url = 'http://localhost:8080/login';
    this.http.post<Observable<boolean>>(url, {
      email: this.user.email,
      password: this.user.password
    }).subscribe((isValid: any) => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.user.email + ':' + this.user.password)
        );
        this.router.navigate(['dashboard']);
      } else {
        alert("Authentication failed.")
      }
    });*/




