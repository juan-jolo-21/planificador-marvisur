//import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JwtResponse } from '../../models/jwt-response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  styleUrl: './login.component.css',
  imports: [ FormsModule]
})
export class LoginComponent {
  username: string ="";
  password: string = "";
 
  constructor(private authService: AuthService, private router: Router) { }
 
  login() {
     this.authService
     .login(this.username as string, this.password as string).subscribe(
        {
          next : (data) => {
            this.router.navigate(['/dashboard']);
          },
          error: (e) => {
            console.log(e);
          }

        }
      );
  }
}
