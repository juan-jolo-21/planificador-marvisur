import { Component } from '@angular/core';
import { OptionsAdvailableComponent } from '../../../../artifacts/options-advailable/options-advailable.component';
import { ListOptionsAdvailableComponent } from '../../../../artifacts/list-options-advailable/list-options-advailable.component';
import { RouterLinkWithHref } from '@angular/router';
import { WizardBarComponent } from '../../../../artifacts/wizard-bar/wizard-bar.component';
import { OptionButtom } from '../../../../../models/option-buttom';

@Component({
  selector: 'app-adm-sucursales-dashboard',
  standalone: true,
  imports: [
    OptionsAdvailableComponent, 
    ListOptionsAdvailableComponent,
    RouterLinkWithHref,WizardBarComponent,
  ],
  templateUrl: './adm-sucursales-dashboard.component.html',
  styleUrl: './adm-sucursales-dashboard.component.css'
})
export class AdmSucursalesDashboardComponent {

  title : string = "Administrar sucursales";
  optionList: OptionButtom[] = [
    {
      title: 'Cambiar datos de sucursal',
      directTo: 'CambiarDatosSucursal'
    },
    {
      title: 'Inscribir sucursal en lugar de destino',
      directTo: 'InscribirSucursalEnDestino'
    },
    {
      title: 'Registrar destino nuevo',
      directTo: 'RegistrarDestino'
    },
    {
      title:'Eliminar sede',
      directTo:'test'
    },
    {
      title:'Eliminar destino',
      directTo:'test'
    },
    {
      title:'Ver todas las sedes',
      directTo:'test'
    }
  ]
}
