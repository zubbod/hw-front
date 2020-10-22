import { Component, OnInit } from '@angular/core';
import { RegionsTree } from './../../../shared/regions/regions-tree';
import { TreeService } from './../services/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  regionsTree: RegionsTree;

  constructor(public treeService: TreeService) {}

  async ngOnInit() {
    this.regionsTree = new RegionsTree(
      await this.treeService.getRegions().toPromise()
    );
    console.log(this.regionsTree);
  }
}
