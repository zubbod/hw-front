import { Region } from './region';

export class RegionsIterator {
  private processingObj: Region[];
  constructor(data: Region[]) {
    this.processingObj = data;
  }

  createIterator = (data: Region[] = this.processingObj) => {
    const regions = data;
    return function* () {
      yield* regions
        .map((region) => region.children)
        .reduce((curr, acc) => acc.concat(curr), []);
    };
  };
}
