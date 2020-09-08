import { Injectable } from '@angular/core';

@Injectable()
export class CollectionUriService {

  getCollection = 'http://localhost:3000/api/collection';
  updateCollection = 'http://localhost:3000/api/collection';
  edit = 'http://localhost:3000/api/collection/edit';
  find = 'http://localhost:3000/api/collection/find';
  remove = (id: string): string => `http://localhost:3000/api/collection/remove/${id}`;

  constructor() { }

}