import { Component, EventEmitter, Output, signal } from '@angular/core';
import { WizardBarComponent } from '../../../artifacts/wizard-bar/wizard-bar.component';
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

@Component({
    selector: 'app-buscar-paq-entregar-receptor',
    standalone: true,
    templateUrl: './buscar-paq-entregar-receptor.component.html',
    styleUrl: './buscar-paq-entregar-receptor.component.css',
    imports: [WizardBarComponent,
      MatButtonModule,
      MatStepperModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatAutocompleteModule,
      AsyncPipe,]
})
export class BuscarPaqEntregarReceptorComponent {
  title = 'Buscar paquete y entregar a receptor';

  
  pricePackage = 25;

  AutoCompleteControlLugarDestino = new FormControl('');
  AutoCompleteControlSucursal = new FormControl('');
  filteredOptionsLugarDestino?: Observable<string[]>;
  filteredOptionsSucursal?: Observable<string[]>;
  private optionsLugarDestino: string[] = ['Piura', 'Arequipa', 'Ica'];
  private optionsSucursal: string[] = ['Cono norte','Cerro Juli','Garci Carbajal'];

  firstFormGroup = this._formBuilder.group({
    DNIReceptor: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    NombreEmisorCompleto: [{value: 'Nombres y Apellidos del cliente (receptor)', disabled: true}, Validators.required],
    dimension_x: [{value: 10, disabled: true}, Validators.required],
    dimension_y: [{value: 12, disabled: true}, Validators.required],
    dimension_z: [{value: 14, disabled: true}, Validators.required],
    peso: [{value: 25, disabled: true}, Validators.required],
    acercaDelPaquete: [{value: "descripcion dada al paquete", disabled: true}, Validators.required],
  });


  mostrarValorEtapaForm(etapa : FormGroup):void{
    console.log(etapa.value)
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {


    

    
  }

  

}
