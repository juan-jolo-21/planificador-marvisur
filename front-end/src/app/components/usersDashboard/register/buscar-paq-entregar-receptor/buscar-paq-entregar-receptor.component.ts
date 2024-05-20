import { Component, EventEmitter, Output, signal } from '@angular/core';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';


@Component({
    selector: 'app-buscar-paq-entregar-receptor',
    standalone: true,
    templateUrl: './buscar-paq-entregar-receptor.component.html',
    styleUrl: './buscar-paq-entregar-receptor.component.css',
    imports: [WizardBarComponent]
})
export class BuscarPaqEntregarReceptorComponent {
  title = 'Buscar paquete y entregar a receptor';

  
  @Output() SendTitle = new EventEmitter();

  ngOnInit(){
    this.SendTitle.emit(this.title);
  }


}
