import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-signup-form',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './reactive-signup-form.component.html',
  styleUrl: './reactive-signup-form.component.css',
})
export class ReactiveSignupFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
