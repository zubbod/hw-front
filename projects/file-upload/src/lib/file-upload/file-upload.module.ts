import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { CropComponent } from './components/crop/crop.component';
import { ResizeComponent } from './components/resize/resize.component';
import { FileActionsComponent } from './components/file-actions/file-actions.component';

@NgModule({
  declarations: [FileUploaderComponent, CropComponent, ResizeComponent, FileActionsComponent],
  exports: [FileUploaderComponent, CropComponent, ResizeComponent, FileActionsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class FileUploadModule {}
