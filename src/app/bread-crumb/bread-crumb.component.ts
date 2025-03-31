import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
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
  }

  getLabel(segment: string): string {
    if (segment === 'parents') return 'Parents';
    if (segment === 'children') return 'Children';
    if (!isNaN(+segment)) return `ID ${segment}`;
    return segment;
  }
}
