import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'wizard-bar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './wizard-bar.component.html',
  styleUrl: './wizard-bar.component.css'
})
export class WizardBarComponent {
  @Input() title : string = '';
}
