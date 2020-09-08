import { CarDto } from './../models/car-dto';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectionService {

  hw$: BehaviorSubject<CarDto[]> = new BehaviorSubject(null);

  constructor() { }

}