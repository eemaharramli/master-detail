import { Injectable } from '@angular/core';
import {Parent} from '../models/Parent';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private parents: Parent[] = [
    { id: 1, name: 'Родитель 1' },
    { id: 2, name: 'Родитель 2' },
    { id: 3, name: 'Родитель 3' }
  ];

  getParents(): Observable<Parent[]>{
    return of(this.parents)
  }

  goToParentById(id: number): Observable<Parent | undefined>{
    return of(this.parents.find(p => p.id === id))
  }
}
