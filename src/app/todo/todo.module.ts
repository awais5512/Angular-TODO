import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosService } from '../services/todos.service';
import { ContainerModule } from '../components/container/container.module';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [CommonModule, ContainerModule],
  exports: [TodoComponent],
  providers: [TodosService],
})
export class TodosModule {}
