import { Component, signal } from '@angular/core';
import { ContainerComponent } from '../components/container/container.component';
// import { GreetingComponent } from '../components/greeting/greeting.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, SignupFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('HOME Greeting Message, Wassup!')
}
