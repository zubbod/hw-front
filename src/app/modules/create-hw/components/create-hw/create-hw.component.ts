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
    public formService: CreateHWFormService,
    private config: ConfigService,
    private hw: CreateHWService,
  ) {}

  checked = true;
  date = new FormControl(moment());
  types = this.config.getConfig().hwTypes;
  imageSrc = '';

  ngOnInit(): void {}

  save = async (value) => {
    console.log('value');
    this.formService.form.markAllAsTouched();

    if (this.formService.form.invalid) {
      return;
    }

    await this.hw.create(value).toPromise();
  };

  drawImage = (filePath: string) => {
    this.imageSrc = filePath;
    this.formService.setControlValue('filePath', filePath);
    this.formService.form;
  };
}
