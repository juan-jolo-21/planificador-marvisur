import { Component } from '@angular/core';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowContainerOD } from '../../../../models/show-container-od';
import { TitleCasePipe } from '@angular/common';

const showContainerOriginDestination: ShowContainerOD[] = [
  {truck_license_plate:"AAA-001",state:"arrived",now_name_branch:"arequipa - cono norte", destination_name_branch: "lima sur", type_container: "unified"},
  {truck_license_plate:"AAA-002",state:"arrived",now_name_branch:"yauca", destination_name_branch: "lima sur", type_container: "single"},
  {truck_license_plate:"AAA-003",state:"arrived",now_name_branch:"camaná", destination_name_branch: "lima sur", type_container: "single"},
  {truck_license_plate:"AAA-004",state:"arrived",now_name_branch:"arequipa - cerro juli", destination_name_branch: "lima sur", type_container: "unified"},
  {truck_license_plate:"AAA-005",state:"arrived",now_name_branch:"la joya", destination_name_branch: "lima sur", type_container: "single"},
  {truck_license_plate:"AAA-006",state:"arrived",now_name_branch:"pedregal", destination_name_branch: "lima sur", type_container: "single"},
  
]

@Component({
  selector: 'app-descargar-contenedor',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule, TitleCasePipe],
  templateUrl: './descargar-contenedor.component.html',
  styleUrl: './descargar-contenedor.component.css'
})
export class DescargarContenedorComponent {
  title = 'Descargar contenedor';

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
