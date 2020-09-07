import { CarType } from './../enums/car-type.enum';

export interface ICar {
  name: string;
  type: CarType;
  manufacturer: string;
  produceYear: string;
  createDate: Date | string;
  id: string;
}
