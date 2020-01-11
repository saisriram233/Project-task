import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  isSubmitted = false;
  message : string

  ngOnInit() {


    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get formControls() { return this.loginForm.controls; }

  login() {

    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.value.email == "admin@admin.com" && this.loginForm.value.password == "123456") {
      this.router.navigate(['/home']);
      this.message = "Password Works"
      console.log(this.loginForm.value);
    }
    else
    {
      this.message = "Password Wrong"
    }

  }
  signup() {
    this.router.navigate(['/signup'])
  }

}
