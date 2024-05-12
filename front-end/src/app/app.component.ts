import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//  title = 'Marvisur - 2';
  constructor (private router : Router){}
  ngOnInit(): void {
    this.checkUserTypeAndRedirect();
  }

  private checkUserTypeAndRedirect(): void {
    const userType = JSON.parse(localStorage.getItem('currentUser') as string).user_type;
    if(userType) {
      this.router.createUrlTree([`/${userType}`]);
    }
  }

}
