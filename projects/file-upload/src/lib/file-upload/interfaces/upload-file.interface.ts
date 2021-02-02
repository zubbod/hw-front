import { SafeResourceUrl } from '@angular/platform-browser';

export interface IUploadFile {
  size: string;
  name: string;
  src: SafeResourceUrl;
  data: Blob;
  progress?: number;
  isUploaded?: boolean;
  filePath?: string;
  fileName?: string;
}
