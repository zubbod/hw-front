import { CollectionService } from './../../services/collection.service';
import { Component, OnInit } from '@angular/core';
import { CollectionManagerService } from '../../services/collection-manager.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {

  constructor(
    public readonly collection: CollectionService,
    private readonly collectionManager: CollectionManagerService,
  ) { }

  ngOnInit(): void {
    this.collectionManager.get().toPromise();
  }

}
