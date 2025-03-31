import { Injectable } from '@angular/core';
import {Child} from '../models/Child';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private children: Child[] = [
    { id: 1, parentId: 1, name: 'Ребёнок A', age: 10 },
    { id: 2, parentId: 1, name: 'Ребёнок B', age: 12 },
    { id: 3, parentId: 2, name: 'Ребёнок C', age: 9 },
    { id: 4, parentId: 3, name: 'Ребёнок D', age: 14 }
  ];

  getChildrenByParentId(parentId: number): Observable<Child[]> {
    return of(this.children.filter(c => c.parentId === parentId))
  }

  getChildById(id: number): Observable<Child | undefined> {
    return of(this.children.find(c => c.id === id))
  }

}
