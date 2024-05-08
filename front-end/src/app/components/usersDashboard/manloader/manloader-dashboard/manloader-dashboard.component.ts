import { Component } from '@angular/core';
import { LogoutSectionComponent } from '../../../artifacts/logout-section/logout-section.component';

@Component({
  selector: 'app-manloader-dashboard',
  standalone: true,
  imports: [LogoutSectionComponent],
  templateUrl: './manloader-dashboard.component.html',
  styleUrl: './manloader-dashboard.component.css'
})
export class ManloaderDashboardComponent {

}
