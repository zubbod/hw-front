import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: () =>
      import('./modules/crop-image/crop-image.module').then((m) => m.CropImageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./modules/collection/collection.module').then((m) => m.CollectionModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./modules/create-hw/create-hw.module').then((m) => m.CreateHwModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
