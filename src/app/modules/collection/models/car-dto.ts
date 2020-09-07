import { ICar } from './../interfaces/car.interface';
import { CarType } from '../enums/car-type.enum';

export class CarDto implements ICar {
  name: string;
  type: CarType;
  manufacturer: string;
  produceYear: string;
  createDate: string | Date;
  id: string;

  constructor(data?: ICar) {
    this.name = data && data.name || '';
    this.type = data && data.type || CarType.Automobile;
    this.manufacturer = data && data.manufacturer || '';
    this.produceYear = data && data.produceYear || '';
    this.createDate = data && data.createDate || new Date();
    this.id = data && data.id || '';
  }
}
