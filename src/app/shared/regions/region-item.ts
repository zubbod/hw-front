import { RegionModel } from "./models/region-model";
import { Region } from "./region";

export class RegionItem extends Region {
  constructor(data: RegionModel) {
    super();
    this.children = [];
    this.id = data.id;
    this.name = data.name;
  }
}