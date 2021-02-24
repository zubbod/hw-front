import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropResizeComponent } from './components/crop-resize/crop-resize.component';

const routes: Routes = [{ path: '', component: CropResizeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropImageRoutingModule {}
