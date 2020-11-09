import { NgModule } from '@angular/core';
import { CustomLayoutComponent } from './custom-layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [CommonModule],
  exports: [CustomLayoutComponent],
})
export class CustomLayoutModule {}
