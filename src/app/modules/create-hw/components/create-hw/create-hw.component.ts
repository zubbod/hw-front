import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { ConfigService } from '../../../../core/services/config.service';
import { CreateHWFormService } from '../../services/create-hw-form.service';
import { CreateHWService } from '../../services/create-hw-service';

@Component({
  selector: 'app-create-hw',
  templateUrl: './create-hw.component.html',
  styleUrls: ['./create-hw.component.scss'],
  providers: [CreateHWService],
})
export class CreateHwComponent implements OnInit {
  constructor(
    public form: CreateHWFormService,
    private config: ConfigService,
    private hw: CreateHWService,
  ) {}

  checked = true;
  date = new FormControl(moment());
  types = this.config.getConfig().hwTypes;

  ngOnInit(): void {}

  save = async (value) => {
    await this.hw.create(value).toPromise();
  };
}
