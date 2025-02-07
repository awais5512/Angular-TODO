import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TodoItem } from '../../types/todos.types';
import { TodosService } from '../../services/todos.service';
import { fromEvent, map, tap } from 'rxjs';

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
  private colors = ['#ffcccb', '#add8e6', '#90ee90', '#ffffe0', '#db3784'];

  constructor(private todoService: TodosService, private el: ElementRef) {}

  handleDeleteTodo() {
    this.todoService.onDelete(this.todoItem.id);
  }

  handleEditTodo() {
    this.todoService.onUpdate(this.todoItem);
  }

  handleToggleComplete() {
    this.toggleComplete.emit(this.todoItem.id); // For Practice of Emitting Events
  }

  ngAfterViewInit() {
    const deleteButton = this.el.nativeElement.querySelector('.delete');

    if (deleteButton) {
      fromEvent(deleteButton, 'click')
        .pipe(
          map(() => Math.floor(Math.random() * this.colors.length)),
          tap((index: number) => {
            document.body.style.backgroundColor = this.colors[index];
          })
        )
        .subscribe();
    }
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
