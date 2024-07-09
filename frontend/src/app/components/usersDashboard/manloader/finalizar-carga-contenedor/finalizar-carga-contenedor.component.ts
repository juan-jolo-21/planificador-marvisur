import { Component } from '@angular/core';

import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowContainerOD } from '../../../../models/show-container-od';
import { TitleCasePipe } from '@angular/common';

const showContainerOriginDestination: ShowContainerOD[] = [
  {truck_license_plate:"RRR-221",state:"on load",now_name_branch:"lima sur", destination_name_branch:"arequipa - cono norte", type_container: "unified"},
  {truck_license_plate:"RRR-223",state:"on load",now_name_branch:"lima sur", destination_name_branch:"arequipa - cono norte", type_container: "single"},
  {truck_license_plate:"RRR-222",state:"on load",now_name_branch:"lima sur", destination_name_branch:"yauli", type_container: "single"},
  {truck_license_plate:"RRR-224",state:"on load",now_name_branch:"lima sur", destination_name_branch:"camana", type_container: "unified"},
  {truck_license_plate:"RRR-225",state:"on load",now_name_branch:"lima sur", destination_name_branch:"yauca", type_container: "single"},
  {truck_license_plate:"RRR-226",state:"on load",now_name_branch:"lima sur", destination_name_branch:"arequipa - cerro juli", type_container: "single"},
  
]


@Component({
  selector: 'app-finalizar-carga-contenedor',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule, TitleCasePipe],
  templateUrl: './finalizar-carga-contenedor.component.html',
  styleUrl: './finalizar-carga-contenedor.component.css'
})
export class FinalizarCargaContenedorComponent {

  title = 'Finalizar carga contenedor';

  displayedColumns: string[] = ['Placa', 'Origen'];
  dataSource = new MatTableDataSource(showContainerOriginDestination);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(row: any){
    console.log(row);
  }

}
