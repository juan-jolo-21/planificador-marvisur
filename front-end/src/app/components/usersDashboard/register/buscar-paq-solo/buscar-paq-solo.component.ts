import { Component } from '@angular/core';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DeliveredPackage } from '../../../../models/delivered-package';
import { Person } from '../../../../models/person';


const deliveredPackage: DeliveredPackage[] = [
  {recieved_person_complete_name:'Edwin Macdowall Reynoso',recieved_person_dni:84962201,about:'acerca de paquete 01'},
  {recieved_person_complete_name:'Luz Corina Del Pino Rodriguez',recieved_person_dni:84962202,about:'acerca de paquete 02'},
  {recieved_person_complete_name:'Nolberto Osorio Beltrán',recieved_person_dni:84962201,about:'acerca de paquete 03'},
  {recieved_person_complete_name:'Luis Soto Soto',recieved_person_dni:84962201,about:'acerca de paquete 04'},
  {recieved_person_complete_name:'Ulises Roman Concha',recieved_person_dni:84962201,about:'acerca de paquete 05'},
  {recieved_person_complete_name:'Zoraida Mamani Quispe',recieved_person_dni:84962201,about:'acerca de paquete 06'},
  {recieved_person_complete_name:'Jose Molina Carpio',recieved_person_dni:84962201,about:'acerca de paquete 07'},
  {recieved_person_complete_name:'Adolfo Sotelo Bedon',recieved_person_dni:84962201,about:'acerca de paquete 08'},
  {recieved_person_complete_name:'Victor Hugo Bustamante Olivera',recieved_person_dni:84962201,about:'acerca de paquete 09'},
  {recieved_person_complete_name:'Fany Romero Sobero',recieved_person_dni:84962201,about:'acerca de paquete 10'},
  {recieved_person_complete_name:'Marco Coral Rodriguez',recieved_person_dni:84962201,about:'acerca de paquete 11'},
  {recieved_person_complete_name:'Robert Espinoza Dominguez',recieved_person_dni:84962201,about:'acerca de paquete 12'}
]

@Component({
  selector: 'app-buscar-paq-solo',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './buscar-paq-solo.component.html',
  styleUrl: './buscar-paq-solo.component.css'
})
export class BuscarPaqSoloComponent {
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
