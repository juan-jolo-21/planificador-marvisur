import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../artifacts/options-advailable/options-advailable.component';
import { OptionButtom } from '../../../../models/option-buttom';
import { ListOptionsAdvailableComponent } from '../../../artifacts/list-options-advailable/list-options-advailable.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-manloader-dashboard',
  standalone: true,
  imports: [OptionsAdvailableComponent, ListOptionsAdvailableComponent],
  templateUrl: './manloader-dashboard.component.html',
  styleUrl: './manloader-dashboard.component.css'
})
export class ManloaderDashboardComponent {
  optionList: OptionButtom[] = [
    {
      title: 'Liberar contenedor',
      directTo: 'LiberarContenedor'
    },
    {
      title: 'Asignar paquetes a contenedor',
      directTo: 'AsignarPaquetesContenedor'
    },
    {
      title: 'Finalizar carga de paquetes en contenedor',
      directTo: 'FinalizarCargaPaquetes'
    },
    {
      title: 'Marcar partida de contenedor',
      directTo: 'MarcarPartidaContenedor'
    },
    {
      title: 'Marcar llegada de contenedor',
      directTo: 'MarcarLlegadaContenedor'
    },
    {
      title: 'Descargar contenedor',
      directTo: 'DescargarContenedor'
    },
    {
      title: 'Ver paquetes por sede sin entregar',
      directTo: 'VerPaquetesPorSedeSinEntregar'
    }
    
    
  ]
}
