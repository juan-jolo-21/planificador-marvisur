import { Component, inject } from '@angular/core';
import { WizardBarComponent } from '../../../../artifacts/wizard-bar/wizard-bar.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DataAndConfirmModalComponent } from '../../../../artifacts/modals/data-and-confirm-modal/data-and-confirm-modal.component';
import { AutocompleteFilterService } from '../../../../../services/autocomplete-filter.service';




@Component({
  selector: 'app-crear-usuarios',
  standalone: true,
  imports: [
    WizardBarComponent,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  templateUrl: './crear-usuarios.component.html',
  styleUrl: './crear-usuarios.component.css'
})
export class CrearUsuariosComponent {
  title = 'Crear usuarios del sistema';


  private modalService = inject(NgbModal);


  AutoCompleteControlSucursalUsuario = new FormControl('');

  filteredOptionsSucursalUsuario?: Observable<string[]>;

  private optionsSucursalUsuario: string[] = ['SJL 5', 'Los olivos 2', 'Cerro Juli', 'Lima norte', 'Lima sur'];

  firstFormGroup = this._formBuilder.group({
    NombreUsuario: ['', Validators.required],
    APUsuario: ['', Validators.required],
    AMUsuario: ['', Validators.required],
    DniUsuario: ['', Validators.required],
    SucursalUsuario: [this.AutoCompleteControlSucursalUsuario.value, Validators.required]
  });

  constructor(private _formBuilder: FormBuilder, private location: Location) {}

  ngOnInit(){
    this.filteredOptionsSucursalUsuario = this.AutoCompleteControlSucursalUsuario.valueChanges.pipe(
      startWith(''),
      map((value) => AutocompleteFilterService.filterFunction(value || '',this.optionsSucursalUsuario))
    );
  }

  async mostrarValorEtapaForm(etapa : FormGroup){
    
    if(this.firstFormGroup.valid){
      
      await this.openModal(JSON.stringify(etapa.value,null,2));
      this.location.back();
    }
    else{
      await this.openModal('inserte datos válidos');
    }
    
  }

  openModal(message : string): Promise<any>{

    const modalRef = this.modalService.open(DataAndConfirmModalComponent,{
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
    modalRef.componentInstance.message = message;
    return modalRef.result; 
	}

}
