import { RegionModel } from './models/region-model';
import { Region } from './region';
import { RegionComponent } from './region-component';

export class RegionsTree {
  private regionsTree: Region[];

  constructor(data: RegionModel[]) {
    this.regionsTree = data.map((region) => new RegionComponent(region));
  }

  getTree(): Region[] {
    return this.regionsTree;
  }

  *[Symbol.iterator]() {
    let result = [];
    this.regionsTree.map((region) => {
      result = result.concat(
        region.children.filter((el) => el.checked).map((el) => el.id)
      );
    });
    yield result;
  }
}
