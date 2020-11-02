import { Component, OnInit } from '@angular/core';
import { RegionsTree } from './../../../shared/regions/regions-tree';
import { TreeService } from './../services/tree.service';
import { RegionsIterator } from '../../../shared/regions/regions-iterator';
import { Region } from '../../../shared/regions/region';
import { CustomLayoutService } from '@zb/custom-layout';
import { TooltipComponent } from '../../../shared/components/tooltip/tooltip.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  regionsTree: Region[];

  constructor(
    public treeService: TreeService,
    private popper: CustomLayoutService
  ) {}

  async ngOnInit() {
    const tree = new RegionsTree(
      await this.treeService.getRegions().toPromise()
    ).getTree();

    this.regionsTree = tree;

    this.setValue([12, 48]);

    this.printToConsole();
  }

  printToConsole = () => {
    const iterator = new RegionsIterator(this.regionsTree).createIterator()();

    let res = iterator.next();
    const result = [];

    while (!res.done) {
      if ((res.value as Region).checked) {
        result.push(res.value['id']);
      }
      res = iterator.next();
    }
    console.log(result);
  };

  setValue = (value: number[]) => {
    const iterator = new RegionsIterator(this.regionsTree).createIterator()();

    let res = iterator.next();

    while (!res.done) {
      if (value.includes((res.value as Region).id)) {
        (res.value as Region).check();
      }
      res = iterator.next();
    }
  };

  show(event) {
    const overlayRef = this.popper.open({
      element: event.target,
      data: 'string-string',
      content: TooltipComponent,
    });

    overlayRef.afterClose$.subscribe((data) => console.log(data));
  }
}
