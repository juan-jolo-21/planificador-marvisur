import { Component } from '@angular/core';

import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContainerManagement } from '../../../../models/container-management';
import { TitleCasePipe } from '@angular/common';

const containerManagement: ContainerManagement[] = [
  {util_charge_tons:29,type_container:"single",truck_license_plate:"CCC-001",state:"on load",now_name_branch:"lima sur",destination_name_branch:"arequipa - cono norte"},
  {util_charge_tons:29,type_container:"single",truck_license_plate:"CCC-002",state:"on load",now_name_branch:"lima sur",destination_name_branch:"arequipa - cono norte"},
  {util_charge_tons:29,type_container:"single",truck_license_plate:"CCC-003",state:"on load",now_name_branch:"lima sur",destination_name_branch:"arequipa - cerro juli"},
  {util_charge_tons:29,type_container:"single",truck_license_plate:"CCC-004",state:"on load",now_name_branch:"lima sur",destination_name_branch:"arequipa - cerro juli"},
];


@Component({
  selector: 'app-liberar-contenedor',
  standalone: true,
  imports: [WizardBarComponent,MatFormFieldModule, MatInputModule, MatTableModule, TitleCasePipe],
  templateUrl: './liberar-contenedor.component.html',
  styleUrl: './liberar-contenedor.component.css'
})
export class LiberarContenedorComponent {
  title = 'Finalizar carga contenedor';

  displayedColumns: string[] = ['Placa', 'CargaUtil','TipoContenedor','SucursalDestino'];
  dataSource = new MatTableDataSource(containerManagement);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(row: any){
    console.log(row);
  }
}
