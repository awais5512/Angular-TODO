import { Injectable, signal, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList = signal<string[]>([]);
  todoInput = signal<string>('');

  addTodo(event: Event) {
    event.preventDefault();

    if (this.todoInput().trim() == '') {
      return;
    }

    this.todoList.update((todos) => [...todos, this.todoInput()]);
    this.todoInput.set('');
  }

  onTodoInputChange(event: Event) {
    this.todoInput.set((event.target as HTMLInputElement).value);
  }

  onDelete(event: { todoItem: string; extra: string }) {
    const { todoItem, extra } = event;
    console.log('Extra (Testing)', extra);
    const filteredList = this.todoList()?.filter((item) => item !== todoItem);
    this.todoList.set(filteredList);
  }
}
