import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ContainerModule } from '../components/container/container.module';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives.module';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [CommonModule, ContainerModule, FormsModule, DirectivesModule],
  exports: [TodoComponent],
})
export class TodosModule {}
