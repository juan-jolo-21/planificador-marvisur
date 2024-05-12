import { Component } from '@angular/core';
import { NavbarComponent } from '../../artifacts/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
