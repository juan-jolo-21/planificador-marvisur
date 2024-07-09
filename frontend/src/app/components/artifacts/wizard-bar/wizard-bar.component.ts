import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterLinkWithHref } from '@angular/router';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'wizard-bar',
  standalone: true,
  imports: [RouterLinkWithHref,DatePipe, TitleCasePipe],
  templateUrl: './wizard-bar.component.html',
  styleUrl: './wizard-bar.component.css'
})
export class WizardBarComponent {
  @Input() title : string = '';
  today = Date.now();

  constructor (private authService: AuthService){

  }

  getCurrentUserJSONData () : any {
    return this.authService.getCurrentUserJSONData();
  }

  getCompleteName(): string{
    return this.authService.getCompleteName();
  }
}
