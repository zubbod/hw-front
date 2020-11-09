import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { HWType } from '../../../collection/enums/car-type.enum';
// import { Moment } from 'moment';
// import { MatDatepicker } from '@angular/material/datepicker';
// import {
//   MomentDateAdapter,
//   MAT_MOMENT_DATE_ADAPTER_OPTIONS,
// } from '@angular/material-moment-adapter';
// import {
//   DateAdapter,
//   MAT_DATE_LOCALE,
//   MAT_DATE_FORMATS,
// } from '@angular/material/core';
import { CreateHWFormService } from '../../services/create-hw-form.service';

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'MM.YYYY',
//   },
//   display: {
//     dateInput: 'MM.YYYY',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };

@Component({
  selector: 'app-create-hw',
  templateUrl: './create-hw.component.html',
  styleUrls: ['./create-hw.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    // },
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CreateHwComponent implements OnInit {
  constructor(public form: CreateHWFormService) {}

  checked = true;
  date = new FormControl(moment());
  // states: string[] = [
  //   'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  //   'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //   'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  //   'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  //   'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  //   'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  //   'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  // ];
  types = Object.entries(HWType);

  ngOnInit(): void {}

  // chosenYearHandler(normalizedYear: Moment) {
  //   const ctrlValue = this.date.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.date.setValue(ctrlValue);
  // }

  // chosenMonthHandler(
  //   normalizedMonth: Moment,
  //   datepicker: MatDatepicker<Moment>
  // ) {
  //   const ctrlValue = this.date.value;
  //   ctrlValue.month(normalizedMonth.month());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close();
  // }
  save = (value) => {
    console.log(value);
  };
}
