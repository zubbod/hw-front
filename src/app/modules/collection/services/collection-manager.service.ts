import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from './../models/car-dto';
import { CollectionUriService } from './collection-uri.service';
import { CollectionService } from './collection.service';

@Injectable()
export class CollectionManagerService {

  constructor(
    private readonly uri: CollectionUriService,
    private readonly collection: CollectionService,
    private readonly http: HttpClient,
  ) { }

  get(): Observable<CarDto[]> {
    return this.http.get<CarDto[]>(this.uri.getCollection);
  }

  add(data: CarDto): Observable<CarDto> {
    return this.http.post<CarDto>(this.uri.updateCollection, data);
  }

  remove(data: CarDto): Observable<CarDto> {
    return this.http.post<CarDto>(this.uri.remove(data.id), data);
  }

  find(query: string): Observable<CarDto[]> {
    return this.http.post<CarDto[]>(this.uri.find, { query });
  }

  edit(car: CarDto): Observable<CarDto> {
    return this.http.post<CarDto>(this.uri.edit, { car });
  }

}
