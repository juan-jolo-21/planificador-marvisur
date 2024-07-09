import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { OnlyAdminComponent } from '../only-admin/only-admin.component';
import { ManloaderDashboardComponent } from '../../manloader/manloader-dashboard/manloader-dashboard.component';
import { RegisterDashboardComponent } from '../../register/register-dashboard/register-dashboard.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [MatTabsModule, OnlyAdminComponent, ManloaderDashboardComponent, RegisterDashboardComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
