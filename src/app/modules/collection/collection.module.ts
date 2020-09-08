import { CollectionService } from './services/collection.service';
import { CollectionManagerService } from './services/collection-manager.service';
import { CollectionUriService } from './services/collection-uri.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionPageComponent } from './components/collection-page/collection-page.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CollectionPageComponent, CollectionListComponent, CollectionCardComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    CollectionUriService,
    CollectionManagerService,
    CollectionService,
  ]
})
export class CollectionModule { }
