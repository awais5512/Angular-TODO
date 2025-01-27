import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  title = 'Todo Page';
  todoService = inject(TodosService);

  ngOnInit() {
    console.log('ngOnInit() runs 1st');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() runs 2nd');
  }

  ngOnDestroy() {
    console.log('Bye from TODO');
  }
}
