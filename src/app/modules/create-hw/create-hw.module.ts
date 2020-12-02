import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateHwComponent } from './components/create-hw/create-hw.component';
import { CreateHwRoutingModule } from './create-hw-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CreateHWFormService } from './services/create-hw-form.service';
import { FileUploadModule } from '@zb/file-upload';
// import { FileUploadModule } from './../../../../projects/file-upload/src/lib/file-upload/file-upload.module';

@NgModule({
  declarations: [CreateHwComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateHwRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    FileUploadModule,
  ],
  providers: [CreateHWFormService],
})
export class CreateHwModule {}
