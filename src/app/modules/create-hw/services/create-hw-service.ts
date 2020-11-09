import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CreateHWService {
  constructor(private http: HttpClient) {}

  create = (value) => this.http.post(`${environment.apiUri}collection`, value);
}
