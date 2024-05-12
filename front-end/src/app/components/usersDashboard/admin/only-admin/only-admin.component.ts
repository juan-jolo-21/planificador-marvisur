import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../artifacts/options-advailable/options-advailable.component';
import { OptionButtom } from '../../../../models/option-buttom';
@Component({
  selector: 'app-only-admin',
  standalone: true,
  imports: [OptionsAdvailableComponent],
  templateUrl: './only-admin.component.html',
  styleUrl: './only-admin.component.css'
})
export class OnlyAdminComponent {
  optionList: OptionButtom[] = [
    {
      title: 'Administrar Usuarios',
      directTo: 'testForAdmin'
    },
    {
      title: 'Administrar Camiones',
      directTo: 'testForAdmin'
    },
    {
      title: 'Administrar Sucursales',
      directTo: 'testForAdmin'
    },
    {
      title: 'Administrar Contenedores',
      directTo: 'testForAdmin'
    }
  ]
}
