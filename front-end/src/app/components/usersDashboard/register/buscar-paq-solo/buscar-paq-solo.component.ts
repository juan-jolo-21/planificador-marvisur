import { Component, EventEmitter, Output, signal } from '@angular/core';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';


@Component({
  selector: 'app-buscar-paq-solo',
  standalone: true,
  imports: [WizardBarComponent],
  templateUrl: './buscar-paq-solo.component.html',
  styleUrl: './buscar-paq-solo.component.css'
})
export class BuscarPaqSoloComponent {
  title = 'Buscar paquete solamente';

  
  @Output() SendTitle = new EventEmitter();

  ngOnInit(){
    this.SendTitle.emit(this.title);
  }

}
