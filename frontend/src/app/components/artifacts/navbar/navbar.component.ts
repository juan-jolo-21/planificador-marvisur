import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LogoutSectionComponent } from '../logout-section/logout-section.component';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoutSectionComponent, TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor (private authService: AuthService){

  }
  getTypeUser (): string {
    return this.authService.getUserType();
  }

  getUserNameData () : any {
    return this.authService.getUserNameData();
  }
  
  getCompleteName () :string{
    return this.authService.getCompleteName();
  }


  getCurrentUserJSONData () : any {
    //console.log(this.authService.getCurrentUserJSONData());
    return this.authService.getCurrentUserJSONData();
  }
  // getUserNameLabels () : string {
  //   return this.authService.getUserNameLabels();
  // }

  // getUserNameLN1 () : string {
  //   return this.authService.getUserNameLN1();
  // }

  // getUserNameLN2 () : string {
  //   return this.authService.getUserNameLN2();
  // }
}
