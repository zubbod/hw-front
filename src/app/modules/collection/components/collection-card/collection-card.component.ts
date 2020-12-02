import { CardIconName } from './../../enums/card-icon.enum';
import { CarDto } from './../../models/car-dto';
import { Component, OnInit, Input } from '@angular/core';
import { HWType } from '../../enums/car-type.enum';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  @Input() hw: CarDto;
  iconName = '';
  defaultPath =
    'https://www.carsinmalaysia.com/media/fotos/9/fb_15523041196_34879_1_1564378554.jpg';

  constructor() {}

  ngOnInit(): void {
    this.getIconName(this.hw.type);
  }

  private getIconName(type: HWType): void {
    switch (type) {
      case HWType.Automobile:
        this.iconName = CardIconName.Automobile;
        break;
      case HWType.Motorcycle:
        this.iconName = CardIconName.Motorcycle;
        break;
      case HWType.Truck:
        this.iconName = CardIconName.Truck;
        break;
      case HWType.Suv:
        this.iconName = CardIconName.Suv;
        break;
      case HWType.Plain:
        this.iconName = CardIconName.Plain;
        break;
    }
  }
}
