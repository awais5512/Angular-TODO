import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  imports: [],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  title = signal('Signup Form');
  email = signal('');
  password = signal('');
  passwordLength = signal(0);

  onKeyUp(event: KeyboardEvent) {
    console.log(`Key Pressed: ${event.key}`);
  }

  onEmailChange(event: Event) {
    this.email.set((event.target as HTMLInputElement).value);
  }

  onPasswordChange(event: Event) {
    this.password.set((event.target as HTMLInputElement).value);
    this.passwordLength.update(prev => prev + 1);
  }

  submitHandler(event: Event) {
    event.preventDefault();
    console.log('Form Submitted' , 'Email: ', this.email(), 'Password: ', this.password());
  }
}
