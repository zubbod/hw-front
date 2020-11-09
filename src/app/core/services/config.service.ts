import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    return this.http
      .get(`${environment.apiUri}config`)
      .pipe(
        tap((res) => {
          this.config.next(res);
        }),
      )
      .toPromise();
  }

  getConfig() {
    return this.config.value;
  }
}
