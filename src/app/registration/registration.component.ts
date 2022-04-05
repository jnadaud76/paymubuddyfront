import {Component, OnInit} from '@angular/core';
import {LoginService} from "../shared/login.service";
import {Router} from "@angular/router";
import {PersonModel} from "../shared/person.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../shared/must-match.validator";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  registerForm!: FormGroup;
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
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.maxLength(20), Validators.pattern("(?=.{8,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).*$")]],
      confirmPassword: ['', Validators.required],
      iban: ['', [Validators.required, Validators.minLength(27), Validators.maxLength(34)]]
    }, {
      validator: MustMatch('password', 'confirmPassword'),
    });

  }


  onSubmitForm() {

    this.user = {
      email: this.registerForm.value.email,
      lastName: this.registerForm.value.lastName,
      firstName: this.registerForm.value.firstName,
      password: this.registerForm.value.password,
      iban: this.registerForm.value.iban,
      amountAvailable: 0
    }
    this.loginService.saveUser(this.user).subscribe();
    this.router.navigate(['/login'])
  }
}

