import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropImageRoutingModule } from './crop-image-routing.module';
import { CropResizeComponent } from './components/crop-resize/crop-resize.component';
import { MoveDirective } from './directives/move.directive';
import { ResizeDirective } from './directives/resize.directive';

@NgModule({
  declarations: [CropResizeComponent, MoveDirective, ResizeDirective],
  imports: [CommonModule, CropImageRoutingModule],
})
export class CropImageModule {}
