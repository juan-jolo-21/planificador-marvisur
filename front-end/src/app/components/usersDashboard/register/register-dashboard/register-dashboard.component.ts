import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { OptionsAdvailableComponent } from '../../../artifacts/options-advailable/options-advailable.component';
import { OptionButtom } from '../../../../models/option-buttom';
import { RouterLinkWithHref } from '@angular/router';
import { ListOptionsAdvailableComponent } from '../../../artifacts/list-options-advailable/list-options-advailable.component';

@Component({
  selector: 'app-register-dashboard',
  standalone: true,
  imports: [OptionsAdvailableComponent, ListOptionsAdvailableComponent,RouterLinkWithHref ],
  templateUrl: './register-dashboard.component.html',
  styleUrl: './register-dashboard.component.css'
})
export class RegisterDashboardComponent {
  optionList: OptionButtom[] = [
    {
      title: 'Registrar paquetes de emisor',
      directTo: 'RegistrarPaqueteEmisor'
    },
    {
      title: 'Buscar paquete y entregar a receptor',
      directTo: 'BuscarEntregarPaquete'
    },
    {
      title: 'Buscar paquete únicamente',
      directTo: 'SoloBuscarPaquete'
    }
  ]
}
