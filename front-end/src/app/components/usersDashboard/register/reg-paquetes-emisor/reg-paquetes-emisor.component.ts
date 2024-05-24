import { Component, EventEmitter, Output, signal } from '@angular/core';


import {
  FormControl,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';

@Component({
  selector: 'app-reg-paquetes-emisor',
  standalone: true,
  imports: [
    WizardBarComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  templateUrl: './reg-paquetes-emisor.component.html',
  styleUrl: './reg-paquetes-emisor.component.css',
})
export class RegPaquetesEmisorComponent {
  
  title = 'Registar paquetes de emisor';

  
  pricePackage = 25;

  AutoCompleteControlLugarDestino = new FormControl('');
  AutoCompleteControlSucursal = new FormControl('');
  filteredOptionsLugarDestino?: Observable<string[]>;
  filteredOptionsSucursal?: Observable<string[]>;
  private optionsLugarDestino: string[] = ['Piura', 'Arequipa', 'Ica'];
  private optionsSucursal: string[] = ['Cono norte','Cerro Juli','Garci Carbajal'];

  firstFormGroup = this._formBuilder.group({
    NombreEmisor: ['', Validators.required],
    APEmisor: ['', Validators.required],
    AMEmisor: ['', Validators.required],
    DniEmisor: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    NombreReceptor: ['', Validators.required],
    APReceptor: ['', Validators.required],
    AMReceptor: ['', Validators.required],
    DniReceptor: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    LugarDestino: [this.AutoCompleteControlLugarDestino.value, Validators.required]
  });

  fourthFormGroup = this._formBuilder.group({
    Sucursal: [this.AutoCompleteControlSucursal.value, Validators.required]
  });



  fifthFormGroup = this._formBuilder.group({
    dimension_x: ['', Validators.required],
    dimension_y: ['', Validators.required],
    dimension_z: ['', Validators.required],
    acercaDelPaquete: ['', Validators.required],
    peso: ['', Validators.required],
    prioridad: ['', Validators.required],
    tipo_encomienda: ['', Validators.required]
  });

  sixthFormGroup = this._formBuilder.group({
    precioCalculado: [ {value: this.pricePackage, disabled: true}, Validators.required ],
  });

  mostrarValorEtapaForm(etapa : FormGroup):void{
    console.log(etapa.value)
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {


    this.filteredOptionsSucursal = this.AutoCompleteControlSucursal.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterSucursal(value || ''))
    );

    this.filteredOptionsLugarDestino = this.AutoCompleteControlLugarDestino.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterLugarDestino(value || ''))
    );

    
  }

  private filterLugarDestino(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsLugarDestino.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private filterSucursal(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsSucursal.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
