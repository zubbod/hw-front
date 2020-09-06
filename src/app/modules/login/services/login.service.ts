import { LoginResponseDto } from './../../../shared/models/login-response-dto';
import { LoginModule } from './../login.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient
  ) { }

  login = (data: any): Observable<LoginResponseDto> =>
    this.http.post<LoginResponseDto>('http://localhost:3000/api/users/authenticate', data)
}
