import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { TreeRoutingModule } from './tree-routing.module';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule, TreeRoutingModule],
})
export class TreeModule {}
