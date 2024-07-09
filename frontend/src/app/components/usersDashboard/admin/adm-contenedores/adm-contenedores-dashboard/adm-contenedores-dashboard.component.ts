import { Component } from '@angular/core';
import { OptionButtom } from '../../../../../models/option-buttom';
import { OptionsAdvailableComponent } from '../../../../artifacts/options-advailable/options-advailable.component';
import { ListOptionsAdvailableComponent } from '../../../../artifacts/list-options-advailable/list-options-advailable.component';
import { RouterLinkWithHref } from '@angular/router';
import { WizardBarComponent } from '../../../../artifacts/wizard-bar/wizard-bar.component';

@Component({
  selector: 'app-adm-contenedores-dashboard',
  standalone: true,
  imports: [
    OptionsAdvailableComponent, 
    ListOptionsAdvailableComponent,
    RouterLinkWithHref,WizardBarComponent,
  ],
  templateUrl: './adm-contenedores-dashboard.component.html',
  styleUrl: './adm-contenedores-dashboard.component.css'
})
export class AdmContenedoresDashboardComponent {
  title : string = "Administrar Contenedores";
  optionList: OptionButtom[] = [
    {
      title: 'Asignar contenedor libre a camión',
      directTo: 'AsignarContenedorLibreCamion'
    },
    {
      title: 'Intercambiar contenedores entre camiones',
      directTo: 'IntercambiarContenedorCamion'
    },
    {
      title: 'Marcar contenedor como no disponible',
      directTo: 'MarcarContenedorNoDisponible'
    },
    {
      title: 'Ver contenedores libres por sede',
      directTo: 'VerContenedoresLibresPorSede'
    },
    {
      title: 'Ver todos los contenedores existentes',
      directTo: 'VerTodosLosContenedores'
    }

  ]
}
