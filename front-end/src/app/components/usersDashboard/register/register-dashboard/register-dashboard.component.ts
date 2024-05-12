import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../artifacts/options-advailable/options-advailable.component';
import { OptionButtom } from '../../../../models/option-buttom';

@Component({
  selector: 'app-register-dashboard',
  standalone: true,
  imports: [OptionsAdvailableComponent],
  templateUrl: './register-dashboard.component.html',
  styleUrl: './register-dashboard.component.css'
})
export class RegisterDashboardComponent {
  optionList: OptionButtom[] = [
    {
      title: 'Registrar paquetes de emisor',
      directTo: 'testForRegister'
    },
    {
      title: 'Buscar paquete y entregar a receptor',
      directTo: 'testForRegister'
    },
    {
      title: 'Buscar paquete únicamente',
      directTo: 'testForRegister'
    }
  ]
}
