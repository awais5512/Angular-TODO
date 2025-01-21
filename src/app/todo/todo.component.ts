import { Component, inject, OnInit, signal } from '@angular/core';
import { ContainerComponent } from '../components/container/container.component';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo',
  imports: [ContainerComponent, NgFor, TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  title = 'Todo Page';
  todoService = inject(TodosService)
}
