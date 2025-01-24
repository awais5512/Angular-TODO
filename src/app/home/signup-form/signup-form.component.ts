import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  imports: [],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  title = signal('Signup Form');
  email = signal('');
  password = signal('');
  passwordLength = signal(0);
  validationError = signal<string | null>(null);
  disableSubmit = computed(() => {
    return !this.email() || !this.password() || this.validationError() !== null;
  });

  validateEmail(email: string): boolean {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

  onEmailChange(event: Event) {
    const newEmail = (event.target as HTMLInputElement).value;
    this.email.set(newEmail);

    if (!this.validateEmail(newEmail)) {
      this.validationError.set('Invalid email address');
    } else {
      this.validationError.set(null);
    }
  }

  onPasswordChange(event: Event) {
    this.password.set((event.target as HTMLInputElement).value);
    this.passwordLength.update((prev) => prev + 1);
  }

  submitHandler(event: Event) {
    event.preventDefault();
    console.log(
      'Form Submitted',
      'Email: ',
      this.email(),
      'Password: ',
      this.password()
    );
  }
}
