import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoItem } from '../../types/todos.types';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() toggleComplete = new EventEmitter<string>(); // For Practice of Emitting Events

  constructor(private todoService: TodosService) {}

  handleDeleteTodo() {
    this.todoService.onDelete(this.todoItem.id);
  }

  handleEditTodo() {
    this.todoService.onUpdate(this.todoItem);
  }

  handleToggleComplete() {
    this.toggleComplete.emit(this.todoItem.id); // For Practice of Emitting Events
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      // console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      // console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      // console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
