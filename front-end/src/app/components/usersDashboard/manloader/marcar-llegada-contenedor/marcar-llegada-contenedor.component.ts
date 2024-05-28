import { Component } from '@angular/core';

import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowContainerOD } from '../../../../models/show-container-od';
import { TitleCasePipe } from '@angular/common';

const showContainerOriginDestination: ShowContainerOD[] = [
  {truck_license_plate:"ABB-221",state:"on route",now_name_branch:"arequipa - cono norte", destination_name_branch: "lima sur", type_container: "unified"},
  {truck_license_plate:"ABB-222",state:"on route",now_name_branch:"yauca", destination_name_branch: "lima sur", type_container: "single"},
  {truck_license_plate:"ABB-223",state:"on route",now_name_branch:"camaná", destination_name_branch: "lima sur", type_container: "single"},
  {truck_license_plate:"ABB-224",state:"on route",now_name_branch:"arequipa - cerro juli", destination_name_branch: "lima sur", type_container: "unified"},
  {truck_license_plate:"ABB-225",state:"on route",now_name_branch:"la joya", destination_name_branch: "lima sur", type_container: "single"},
  {truck_license_plate:"ABB-226",state:"on route",now_name_branch:"pedregal", destination_name_branch: "lima sur", type_container: "single"},
  
]

@Component({
  selector: 'app-marcar-llegada-contenedor',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule, TitleCasePipe],
  templateUrl: './marcar-llegada-contenedor.component.html',
  styleUrl: './marcar-llegada-contenedor.component.css'
})
export class MarcarLlegadaContenedorComponent {
  title = 'Marcar llegada de contenedor';

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
