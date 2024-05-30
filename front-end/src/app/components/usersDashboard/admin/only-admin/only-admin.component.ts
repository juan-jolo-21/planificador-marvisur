import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../artifacts/options-advailable/options-advailable.component';
import { OptionButtom } from '../../../../models/option-buttom';
import { ListOptionsAdvailableComponent } from '../../../artifacts/list-options-advailable/list-options-advailable.component';
@Component({
  selector: 'app-only-admin',
  standalone: true,
  imports: [OptionsAdvailableComponent, ListOptionsAdvailableComponent],
  templateUrl: './only-admin.component.html',
  styleUrl: './only-admin.component.css'
})
export class OnlyAdminComponent {
  optionList: OptionButtom[] = [
    {
      title: 'Administrar Usuarios',
      directTo: 'AdministrarUsuarios'
    },
    {
      title: 'Administrar Camiones',
      directTo: 'AdministrarCamiones'
    },
    {
      title: 'Administrar Contenedores',
      directTo: 'AdministrarContenedores'
    },
    {
      title: 'Administrar Sucursales',
      directTo: 'testing'
    },
    
  ]
}
