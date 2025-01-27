import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ContainerModule } from '../components/container/container.module';
import { SignupFormModule } from './signup-form/signup-form.module';
import { ReactiveSignupFormModule } from './reactive-signup-form/reactive-signup-form.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContainerModule,
    SignupFormModule,
    ReactiveSignupFormModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
