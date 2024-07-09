import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../../artifacts/options-advailable/options-advailable.component';
import { ListOptionsAdvailableComponent } from '../../../../artifacts/list-options-advailable/list-options-advailable.component';
import { RouterLinkWithHref } from '@angular/router';
import { WizardBarComponent } from '../../../../artifacts/wizard-bar/wizard-bar.component';
import { OptionButtom } from '../../../../../models/option-buttom';

@Component({
  selector: 'app-adm-camiones-dashboard',
  standalone: true,
  imports: [
    OptionsAdvailableComponent, 
    ListOptionsAdvailableComponent,
    RouterLinkWithHref,WizardBarComponent,
  ],
  templateUrl: './adm-camiones-dashboard.component.html',
  styleUrl: './adm-camiones-dashboard.component.css'
})
export class AdmCamionesDashboardComponent {
  title : string = "Administrar Camiones";
  optionList: OptionButtom[] = [
    {
      title: 'Cambiar estado del camion',
      directTo: 'CambiarEstadoCamion'
    },
    {
      title: 'Ver todos los camiones por sede',
      directTo: 'VerCamionesTodosPorSede'
    },
    {
      title: 'Insertar datos de camion',
      directTo: 'InsertarDatosCamion'
    },
    {
      title: 'Modificar datos de camion',
      directTo: 'ModificarDatosCamion'
    },
    {
      title: 'Eliminar datos de camion',
      directTo: 'EliminarDatosCamion'
    }
  ]
}
