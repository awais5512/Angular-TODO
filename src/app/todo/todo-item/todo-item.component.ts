import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todoItem!: string;
  @Output() delete = new EventEmitter<{ todoItem: string; extra: string }>();

  handleDelete() {
    this.delete.emit({ todoItem: this.todoItem, extra: 'dude' });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() triggered:');
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
