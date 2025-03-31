import { Routes } from '@angular/router';
import {ParentListComponent} from './parent-list/parent-list.component';
import {ChildListComponent} from './child-list/child-list.component';
import {ChildDetailComponent} from './child-detail/child-detail.component';

export const routes: Routes = [
  { path: 'parents', component: ParentListComponent },
  { path: 'parents/:parentId', component: ChildListComponent },
  { path: 'parents/:parentId/children/:childId', component: ChildDetailComponent },
  { path: '', redirectTo: 'parents', pathMatch: 'full' }
];
