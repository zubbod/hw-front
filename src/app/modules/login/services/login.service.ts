import { LoginModule } from './../login.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient
  ) { }

  login = (data: any): Observable<any> => this.http.post('http://localhost:3000/api/users', data);
}