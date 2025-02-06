import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainbowTextDirective } from './directives/rainbow-text.directive';

@NgModule({
  declarations: [RainbowTextDirective],
  imports: [CommonModule],
  exports: [RainbowTextDirective],
})
export class DirectivesModule {}
