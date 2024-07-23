import { Component, inject, OnInit } from '@angular/core';
import { WizardBarComponent } from '../../../../artifacts/wizard-bar/wizard-bar.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, map, startWith, switchMap } from 'rxjs/operators';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DataAndConfirmModalComponent } from '../../../../artifacts/modals/data-and-confirm-modal/data-and-confirm-modal.component';
import { AutocompleteFilterService } from '../../../../../services/autocomplete-filter.service';
import { Branch } from '../../../../../models/branch';
import { BranchesService } from '../../../../../services/branches.service';
import { UserManageService } from '../../../../../services/user-manage.service';




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
  AutoCompleteControlPositionEmployee = new FormControl('');


  filteredOptionsSucursalUsuario?: Observable<string[]>;
  filteredOptionsPositionEmployee?: Observable<string[]>;


  private optionsSucursalUsuario: string[] = [];
  private optionsPositionEmployee: string[] = ['empacador','registrador','supervisor de descargas','digitador'];


  firstFormGroup = this._formBuilder.group({
    NombreUsuario: ['', Validators.required],
    APUsuario: ['', Validators.required],
    AMUsuario: ['', Validators.required],
    DniUsuario: ['', Validators.required],
    SucursalUsuario: [this.AutoCompleteControlSucursalUsuario.value, Validators.required],
    PositionEmployee: [this.AutoCompleteControlPositionEmployee.value, Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              private location: Location, 
              private branchesServices: BranchesService,
              private userManageService: UserManageService
            ) {}

  ngOnInit(){

    this.branchesServices.getBranchesNames().pipe(
      concatMap(branches =>{
        this.optionsSucursalUsuario = branches.map((branch: { name_branch: any })=> branch.name_branch);
        return this.AutoCompleteControlSucursalUsuario.valueChanges.pipe(
          startWith(''),
          map((value) => this.filterSucursalUsuario(value || ''))
        );
      }),catchError(err =>{
        console.log(err);
        return of([]);
      })
    ).subscribe(filteredOptions=>{
      this.filteredOptionsSucursalUsuario = of(filteredOptions);
    });


    // this.filteredOptionsSucursalUsuario = this.AutoCompleteControlSucursalUsuario.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => AutocompleteFilterService.filterFunction(value || '',this.optionsSucursalUsuario))
    // );


    this.filteredOptionsPositionEmployee = this.AutoCompleteControlPositionEmployee.valueChanges.pipe(
      startWith(''),
      map(value=>this.filterPositionEmployee(value || ''))
    )



    
  }

  async mostrarValorEtapaForm(etapa : FormGroup){
    
    if(this.firstFormGroup.valid){

      await this.postUser(etapa.value);
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

  async postUser(jsonResponse: any) {
    this.userManageService.postUser(jsonResponse).subscribe({
      next: (data)=>{
        console.log('posteado correactamente a API');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  private filterSucursalUsuario(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsSucursalUsuario.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }


  private filterPositionEmployee(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsPositionEmployee.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

}
