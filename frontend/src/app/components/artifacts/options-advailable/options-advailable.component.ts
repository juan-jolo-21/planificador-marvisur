import { Component, Input } from '@angular/core';

@Component({
  selector: 'selector-for-options-advailable',
  standalone: true,
  imports: [],
  templateUrl: './options-advailable.component.html',
  styleUrl: './options-advailable.component.css'
})
export class OptionsAdvailableComponent {
  @Input() title : string = '';
}
