import { CreateHwComponent } from './components/create-hw/create-hw.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreateHwComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class CreateHwRoutingModule {}
