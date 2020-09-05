import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  register = (data: any): Observable<any> => this.http.post('http://localhost:3000/api/users', data);

}
