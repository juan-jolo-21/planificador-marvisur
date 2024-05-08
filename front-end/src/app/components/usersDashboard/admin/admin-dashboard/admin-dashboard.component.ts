import { Component } from '@angular/core';
import { LogoutSectionComponent } from '../../../artifacts/logout-section/logout-section.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [LogoutSectionComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}