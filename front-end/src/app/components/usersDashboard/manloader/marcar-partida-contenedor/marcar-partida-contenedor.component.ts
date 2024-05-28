import { Component } from '@angular/core';

import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowContainerOD } from '../../../../models/show-container-od';
import { TitleCasePipe } from '@angular/common';

const showContainerOriginDestination: ShowContainerOD[] = [
  {truck_license_plate:"LPS-701",state:"ready",now_name_branch:"lima sur", destination_name_branch:"arequipa - cono norte", type_container: "unified"},
  {truck_license_plate:"LPS-702",state:"ready",now_name_branch:"lima sur", destination_name_branch:"yauli", type_container: "single"},
  {truck_license_plate:"LPS-703",state:"ready",now_name_branch:"lima sur", destination_name_branch:"arequipa - cono norte", type_container: "single"},
  {truck_license_plate:"LPS-704",state:"ready",now_name_branch:"lima sur", destination_name_branch:"camana", type_container: "unified"},
  {truck_license_plate:"LPS-705",state:"ready",now_name_branch:"lima sur", destination_name_branch:"yauca", type_container: "single"},
  {truck_license_plate:"LPS-706",state:"ready",now_name_branch:"lima sur", destination_name_branch:"arequipa - cerro juli", type_container: "single"},
  
]

@Component({
  selector: 'app-marcar-partida-contenedor',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule, TitleCasePipe],
  templateUrl: './marcar-partida-contenedor.component.html',
  styleUrl: './marcar-partida-contenedor.component.css'
})
export class MarcarPartidaContenedorComponent {
  title = 'Marcar partida de contenedor';

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
