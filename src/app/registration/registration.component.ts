import {Component, OnInit} from '@angular/core';
import {LoginService} from "../shared/login.service";
import {Router} from "@angular/router";
import {PersonModel} from "../shared/person.model";
import {HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../shared/must-match.validator";
import {map, Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  //user! : PersonModel;
 // registerForm$! :Observable<PersonModel>
  user: PersonModel = {
    email: '',
    lastName: '',
    firstName: '',
    password: '',
    iban: '',
    amountAvailable: 0
  }

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
   this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      iban: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
   /* this.registerForm$ = this.registerForm.valueChanges.pipe(
      map(formValue => ({
        email: this.registerForm.value.email,
        lastName: this.registerForm.value.lastName,
        firstName: this.registerForm.value.firstName,
        password: this.registerForm.value.password,
        iban: this.registerForm.value.iban,
        amountAvailable:0,

      }))
    );
    console.log(this.registerForm$.subscribe());*/
  }

  /*onSubmitForm(): any {
    //console.log(this.registerForm.value)
     const userAsJson = {
      email: this.registerForm.value.email,
      lastName: this.registerForm.value.lastName,
      firstName: this.registerForm.value.firstName,
      password: this.registerForm.value.password,
      iban: this.registerForm.value.iban,
      amountAvailable:0
    }
    let user = JSON.stringify(userAsJson);
     console.log(userAsJson);*/

         /*let user = this.registerForm.value.pipe(
     map(formValue => ({
       email: this.registerForm.value.email,
       lastName: this.registerForm.value.lastName,
       firstName: this.registerForm.value.firstName,
       password: this.registerForm.value.password,
       iban: this.registerForm.value.iban,
       amountAvailable: 0
     }))
   );

    this.loginService.saveUser(this.user);
    console.log(this.user);
   }*/

  onSubmitForm() {
    this.user = {
      email: this.registerForm.value.email,
      lastName: this.registerForm.value.lastName,
      firstName: this.registerForm.value.firstName,
      password: this.registerForm.value.password,
      iban: this.registerForm.value.iban,
      amountAvailable:0
    }
    this.loginService.saveUser(this.user).subscribe(() => {
     /* this.loginService.login(this.user.email, this.user.password).subscribe(() => {
       this.router.navigate(['dashboard']);
      });*/
    });
  }
}


/*, (response: { status: number; error: { errors: string | any[]; }; }) => {
      if (response && response.status === 409) {
        alert('utilisateur existe deja avec cet e-mail');
        return;
      }

      if (response && response.error &&
        response.error.errors && response.error.errors.length > 0) {
        alert('erreurs détectées : ' + JSON.stringify(response.error.errors))
      }
    })
  }
}*/

