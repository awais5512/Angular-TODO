import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todoItem!: string;
  @Output() delete = new EventEmitter<{todoItem: string, extra: string}>();

  handleDelete() {
    this.delete.emit({ todoItem: this.todoItem, extra: 'dude' });
  }
}
