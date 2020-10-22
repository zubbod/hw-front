import { RegionModel } from "./models/region-model";
import { Region } from "./region";
import { RegionItem } from "./region-item";

export class RegionComponent extends Region {
  constructor(data: RegionModel) {
    super();
    this.name = data.name;
    this.id = data.id;
    this.children = data.regions.map(region => new RegionItem(region));
  }
}