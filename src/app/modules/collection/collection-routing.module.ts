import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPageComponent } from './components/collection-page/collection-page.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent,
    children: [
      {
        path: '',
        component: CollectionListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
