import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.generateBreadcrumbs(); // сразу при старте
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.generateBreadcrumbs();
    });
  }

  generateBreadcrumbs(): void {
    const segments = this.router.url.split('/').filter(Boolean);
    let url = '';
    this.breadcrumbs = segments.map(segment => {
      url += `/${segment}`;
      return {
        label: this.getLabel(segment),
        url
      };
    });

    console.log('Крошки:', this.breadcrumbs);
    this.cdr.detectChanges(); // <--- форсируем обновление
  }

  getLabel(segment: string): string {
    if (segment === 'parents') return 'Parents';
    if (segment === 'children') return 'Children';
    if (!isNaN(+segment)) return `ID ${segment}`;
    return segment;
  }
}
