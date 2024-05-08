import { Component } from '@angular/core';
import { LogoutSectionComponent } from '../../../artifacts/logout-section/logout-section.component';

@Component({
  selector: 'app-register-dashboard',
  standalone: true,
  imports: [LogoutSectionComponent],
  templateUrl: './register-dashboard.component.html',
  styleUrl: './register-dashboard.component.css'
})
export class RegisterDashboardComponent {

}
