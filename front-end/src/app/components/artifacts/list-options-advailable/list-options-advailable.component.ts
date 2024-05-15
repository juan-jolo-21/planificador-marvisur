import { Component, Input } from '@angular/core';
import { OptionButtom } from '../../../models/option-buttom';
import { RouterLinkWithHref } from '@angular/router';
import { OptionsAdvailableComponent } from '../options-advailable/options-advailable.component';

@Component({
  selector: 'ArrayList-options-advailable',
  standalone: true,
  imports: [RouterLinkWithHref, OptionsAdvailableComponent],
  templateUrl: './list-options-advailable.component.html',
  styleUrl: './list-options-advailable.component.css'
})
export class ListOptionsAdvailableComponent {
  @Input() ListOptions: OptionButtom [] = [];
}
