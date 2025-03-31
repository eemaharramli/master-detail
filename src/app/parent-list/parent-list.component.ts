import { Component, OnInit } from '@angular/core';
import { Parent } from '../models/Parent';
import {Router, RouterModule} from '@angular/router';
import {CommonModule, NgForOf} from '@angular/common';
import { ParentService } from '../services/parent.service';
import { BreadcrumbComponent } from '../bread-crumb/breadcrumb.component';

@Component({
  selector: 'app-parent-list',
  standalone: true,
  imports: [
    NgForOf,
    BreadcrumbComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
  parents: Parent[] = [
    { id: 1, name: 'Parent 1' },
    { id: 2, name: 'Parent 2' },
    { id: 3, name: 'Parent 3' },
  ];

  constructor(private router: Router, private parentService: ParentService) {}

  ngOnInit(): void {
    this.parentService.getParents().subscribe(parents => {
      this.parents = parents;
    });
  }

  goToChildren(parentId: number): void {
    this.router.navigate(['/parents', parentId]);
  }
}
