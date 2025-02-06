import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../types/todos.types';
import { fromEvent, scan, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  title = 'Todo Page';
  todoService = inject(TodosService);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log('ngOnInit() runs 1st');
  }

  todoItemIdentifier(index: number, todoItem: TodoItem) {
    return todoItem.id;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() runs 2nd');
  }

  ngOnDestroy() {
    console.log('Bye from TODO');
  }
}
