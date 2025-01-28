import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoItem } from '../../types/todos.types';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() editTodo = new EventEmitter<TodoItem>();
  @Output() toggleComplete = new EventEmitter<string>();

  handleDeleteTodo() {
    this.deleteTodo.emit(this.todoItem.id);
  }

  handleEditTodo() {
    this.editTodo.emit(this.todoItem);
  }

  handleToggleComplete() {
    this.toggleComplete.emit(this.todoItem.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
