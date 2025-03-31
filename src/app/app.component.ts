import {RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';
// import {BreadcrumbComponent} from './bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // убрано: RouterLink, RouterLinkActive
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'master-detail';
}
