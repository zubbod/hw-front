import { HWType } from './../enums/car-type.enum';

export interface ICar {
  name: string;
  type: HWType;
  manufacturer: string;
  produceYear: string;
  createDate: Date | string;
  id: string;
}
