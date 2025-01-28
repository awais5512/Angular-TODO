import { Injectable, signal, SimpleChanges } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { TodoItem } from '../types/todos.types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly TODO_STORAGE_KEY = 'TODO_STORAGE';
  todoList = signal<TodoItem[]>([]);
  todoInput = signal<string>('');
  searchText: string = '';
  filter = signal<'all' | 'completed' | 'pending'>('all');

  constructor(private localstorage: LocalstorageService) {
    const savedTodos = this.localstorage.get<TodoItem[]>(this.TODO_STORAGE_KEY);
    this.todoList.set(savedTodos);
  }

  addTodo(event: Event) {
    event.preventDefault();

    if (this.todoInput().trim() == '') {
      return;
    }

    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      label: this.todoInput(),
      completed: false,
    };

    this.todoList.update((todos) => {
      const updatedTodos = [...todos, newTodo];
      this.localstorage.set(this.TODO_STORAGE_KEY, updatedTodos);

      return updatedTodos;
    });

    this.todoInput.set('');
  }

  onTodoInputChange(event: Event) {
    this.todoInput.set((event.target as HTMLInputElement).value);
  }

  onDelete(todoID: string) {
    this.todoList.update((todos) => {
      const filteredList = todos?.filter((item) => item.id !== todoID);
      this.localstorage.set(this.TODO_STORAGE_KEY, filteredList);

      return filteredList;
    });
  }

  onUpdate(todoItem: TodoItem) {
    this.todoList.update((todos) => {
      const filteredList = todos?.filter((item) => item.id !== todoItem.id);
      this.todoInput.set(todoItem.label);

      return filteredList;
    });
  }

  getFilteredTodos(): TodoItem[] {
    const search = this.searchText.toLowerCase();
    const filter = this.filter();

    return this.todoList().filter((todo) => {
      const matchesSearch = todo.label.toLowerCase().includes(search);
      const matchesFilter =
        filter === 'all' ||
        (filter === 'completed' && todo.completed) ||
        (filter === 'pending' && !todo.completed);

      return matchesSearch && matchesFilter;
    });
  }

  toggleComplete(todoID: string) {
    const updatedTodos = this.todoList().map((todo) =>
      todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    );

    this.todoList.set(updatedTodos);
    this.localstorage.set(this.TODO_STORAGE_KEY, updatedTodos);
  }
}
