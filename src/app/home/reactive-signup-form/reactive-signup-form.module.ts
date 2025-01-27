import { NgModule } from '@angular/core';
import { ReactiveSignupFormComponent } from './reactive-signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReactiveSignupFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveSignupFormComponent],
})
export class ReactiveSignupFormModule {}
