import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../artifacts/options-advailable/options-advailable.component';
import { OptionButtom } from '../../../../models/option-buttom';

@Component({
  selector: 'app-manloader-dashboard',
  standalone: true,
  imports: [OptionsAdvailableComponent],
  templateUrl: './manloader-dashboard.component.html',
  styleUrl: './manloader-dashboard.component.css'
})
export class ManloaderDashboardComponent {
  optionList: OptionButtom[] = [
    {
      title: 'Descargar contenedor',
      directTo: 'testForManloader'
    },
    {
      title: 'Ver paquetes por sede sin entregar',
      directTo: 'testForManloader'
    },
    {
      title: 'Ver paquetes recibidos',
      directTo: 'testForManloader'
    },
    {
      title: 'Asignar paquetes a contenedor',
      directTo: 'testForManloader'
    },
    {
      title: 'Marcar llegada de contenedor',
      directTo: 'testForManloader'
    },{
      title: 'Marcar partida de contenedor',
      directTo: 'testForManloader'
    }
  ]
}
