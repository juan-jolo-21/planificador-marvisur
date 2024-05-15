import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout-section',
  standalone: true,
  imports: [],
  templateUrl: './logout-section.component.html',
  styleUrl: './logout-section.component.css'
})
export class LogoutSectionComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout(){
    this.authService.logout();

    const urlTree = this.router.createUrlTree(['']);
    this.router.navigateByUrl(urlTree);
  }
}
