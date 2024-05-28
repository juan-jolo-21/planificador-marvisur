import { Component } from '@angular/core';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DeliveredPackage } from '../../../../models/delivered-package';



const deliveredPackage: DeliveredPackage[] = [
  {reciever_person_complete_name:'Edwin Macdowall Reynoso',reciever_person_dni:84962201,about:'acerca de paquete 01',origin_branch:"arequipa - cono norte", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Luz Corina Del Pino Rodriguez',reciever_person_dni:84962202,about:'acerca de paquete 02',origin_branch:"yauca", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Nolberto Osorio Beltrán',reciever_person_dni:84962201,about:'acerca de paquete 03',origin_branch:"arequipa -cerro juli", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Luis Soto Soto',reciever_person_dni:84962201,about:'acerca de paquete 04',origin_branch:"arequipa - cono norte", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Ulises Roman Concha',reciever_person_dni:84962201,about:'acerca de paquete 05',origin_branch:"camana", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Zoraida Mamani Quispe',reciever_person_dni:84962201,about:'acerca de paquete 06',origin_branch:"yauca", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Jose Molina Carpio',reciever_person_dni:84962201,about:'acerca de paquete 07',origin_branch:"yauca", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Adolfo Sotelo Bedon',reciever_person_dni:84962201,about:'acerca de paquete 08',origin_branch:"arequipa - cono norte", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Victor Hugo Bustamante Olivera',reciever_person_dni:84962201,about:'acerca de paquete 09',origin_branch:"arequipa - cono norte", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Fany Romero Sobero',reciever_person_dni:84962201,about:'acerca de paquete 10',origin_branch:"camana", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Marco Coral Rodriguez',reciever_person_dni:84962201,about:'acerca de paquete 11',origin_branch:"la joya", destination_branch: "lima sur"},
  {reciever_person_complete_name:'Robert Espinoza Dominguez',reciever_person_dni:84962201,about:'acerca de paquete 12',origin_branch:"pedregal", destination_branch: "lima sur"}
]

@Component({
  selector: 'app-ver-paquetes-por-sede-sin-entregar',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './ver-paquetes-por-sede-sin-entregar.component.html',
  styleUrl: './ver-paquetes-por-sede-sin-entregar.component.css'
})
export class VerPaquetesPorSedeSinEntregarComponent {
  title = 'Buscar paquete solamente';
  displayedColumns: string[] = ['DNI', 'NCR', 'About'];
  dataSource = new MatTableDataSource(deliveredPackage);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(row: any){
    console.log(row);
  }

}
