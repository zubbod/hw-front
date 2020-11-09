import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegionModel } from '../../../shared/regions/models/region-model';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private treeJsonUri = 'assets/mock/tree.json'

  constructor(
    private http: HttpClient,
  ) { }

  getRegions(): Observable<RegionModel[]> {
    return this.http.get<RegionModel[]>(this.treeJsonUri);
  }
}
