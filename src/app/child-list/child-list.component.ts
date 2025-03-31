import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Child} from '../models/Child';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildService} from '../services/child.service';
import {BreadcrumbComponent} from '../bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-child-list',
  imports: [
    NgForOf,
    BreadcrumbComponent
  ],
  templateUrl: './child-list.component.html',
  standalone: true,
  styleUrl: './child-list.component.css'
})
export class ChildListComponent implements OnInit{
  children: Child[] = [];
  parentId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private childService: ChildService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('parentId');
      if (id) {
        this.parentId = +id;
        this.childService.getChildrenByParentId(this.parentId).subscribe(children => {
          this.children = children;
        });
      }
    });
  }

  goToChildDetail(childId: number): void {
    this.router.navigate(['/parents', this.parentId, 'children', childId]);
  }
}
