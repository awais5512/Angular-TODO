import { Component, signal } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ContainerComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = signal('DEMO-LOGO')
}
