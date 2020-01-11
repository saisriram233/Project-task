import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  registerForm: FormGroup;
  isSubmitted = false;
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }
  get formControls() { return this.registerForm.controls; }

  signUp() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value)
    this.router.navigate(['/login'])
  }

  login() {
    this.router.navigate(['/login'])
  }

}
