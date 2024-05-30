import { Component } from '@angular/core';

import { OptionButtom } from '../../../../../models/option-buttom';
import { OptionsAdvailableComponent } from '../../../../artifacts/options-advailable/options-advailable.component';
import { ListOptionsAdvailableComponent } from '../../../../artifacts/list-options-advailable/list-options-advailable.component';
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { WizardBarComponent } from '../../../../artifacts/wizard-bar/wizard-bar.component';



@Component({
  selector: 'app-adm-usuarios-dashboard',
  standalone: true,
  imports: [
    OptionsAdvailableComponent, 
    ListOptionsAdvailableComponent,
    RouterLinkWithHref,WizardBarComponent,
  ],
  templateUrl: './adm-usuarios-dashboard.component.html',
  styleUrl: './adm-usuarios-dashboard.component.css'
})
export class AdmUsuariosDashboardComponent {
  title : string = "Administrar usuarios";
  optionList: OptionButtom[] = [
    {
      title: 'Crear Usuario',
      directTo: 'CrearUsuario'
    },
    {
      title: 'Modificar Usuario',
      directTo: 'ModificarUsuario'
    },
    {
      title: 'Eliminar Usuario',
      directTo: 'EliminarUsuario'
    }
  ]

}
