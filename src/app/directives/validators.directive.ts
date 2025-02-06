import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export function emailValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(control.value) ? null : { invalidEmail: true };
}

export function usernameAsyncValidator(
  control: AbstractControl
): Observable<any> | Promise<any> {
  const username = control.value;

  return new Observable((observer) => {
    setTimeout(() => {
      if (username === 'Awais') {
        observer.next({ usernameTaken: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 3000);
  });
}
