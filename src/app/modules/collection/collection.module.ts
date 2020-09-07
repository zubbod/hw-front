import { CollectionService } from './services/collection.service';
import { CollectionManagerService } from './services/collection-manager.service';
import { CollectionUriService } from './services/collection-uri.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionPageComponent } from './components/collection-page/collection-page.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';


@NgModule({
  declarations: [CollectionPageComponent, CollectionListComponent, CollectionCardComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  providers: [
    CollectionUriService,
    CollectionManagerService,
    CollectionService,
  ]
})
export class CollectionModule { }
