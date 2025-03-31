import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {Child} from '../models/Child';
import {ActivatedRoute} from '@angular/router';
import {ChildService} from '../services/child.service';
import {BreadcrumbComponent} from '../bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-child-detail',
  imports: [
    NgIf,
    BreadcrumbComponent
  ],
  templateUrl: './child-detail.component.html',
  standalone: true,
  styleUrl: './child-detail.component.css'
})
export class ChildDetailComponent implements OnInit{
  child!: Child | undefined;

  constructor(
    private route: ActivatedRoute,
    private childService: ChildService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('childId');
      if (id) {
        const childId = +id;
        this.childService.getChildById(childId).subscribe(child => {
          this.child = child;
        });
      }
    });
  }
}
