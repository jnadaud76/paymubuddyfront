import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from "rxjs";
import {PersonModel} from "./person.model";
import {Router} from "@angular/router";
/*const httpOptions = {
  headers : new HttpHeaders( {'Content-Type': 'application/json'})
};*/
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {

      // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    }


 public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }


  /*logout(): any {
    return this.http.post('http://localhost:8080/logout', null);
  }*/
  /*public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }*/

    login (username:string, password:string) {
    const headers=new HttpHeaders({Authorization : 'Basic '+ btoa(username+":"+password)})
     //sessionStorage.setItem('currentUser', JSON.stringify(this.getCurrentUser()))
      //return this.http.get("http://localhost:8080/persons")
     return this.http.get(`http://localhost:8080/email?email=${username}`, {headers})
       .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }));
    //return this.http.get("http://localhost:8080/", {headers, responseType: 'text' as 'json'});
    // return this.http.get(`http://localhost:8080/user`, {headers})
    /*.pipe(map(any => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(any));
        this.currentUserSubject.next(any);
        return any;
      }));*/
    }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
    }

   /* getCurrentUser () : any {
      return this.http.get("http://localhost:8080/user");
    }*/

   saveUser(user: PersonModel): any {
    return this.http.post('http://localhost:8080/person', user);
  }

  /*login(user: any): any {
   const bodyFormData = new FormData();
    bodyFormData.set('username', user.email);
    bodyFormData.set('password', user.password);
    return this.http.post('http://localhost:8080/login', bodyFormData);
  }*/

  /*login(user: PersonModel): Observable<HttpResponse<any> | HttpErrorResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<HttpResponse<any> | HttpErrorResponse>
    ('http://localhost:8080/login', PersonModel ,{observe:'response', headers: headers});
  }*/
 /*login (Person : {email: string, password: string}) : Observable<PersonModel> {
 return this.http.post<PersonModel>('http://localhost:8080/login', PersonModel);
}*/

  /*isAuthenticated(): any {
    return this.http.get('http://localhost:8080/isAuthenticated');
  }*/


}
