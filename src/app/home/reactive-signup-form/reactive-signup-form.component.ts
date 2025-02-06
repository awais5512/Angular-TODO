import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  emailValidator,
  usernameAsyncValidator,
} from '../../directives/validators.directive';

@Component({
  selector: 'app-reactive-signup-form',
  standalone: false,
  templateUrl: './reactive-signup-form.component.html',
  styleUrl: './reactive-signup-form.component.css',
})
export class ReactiveSignupFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      emailValidator,
    ]),
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ],
      asyncValidators: [usernameAsyncValidator],
    }),
  });

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get username() {
    return this.userForm.get('username');
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
