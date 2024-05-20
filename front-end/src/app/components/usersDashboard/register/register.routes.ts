import { Routes } from '@angular/router';


import { RegPaquetesEmisorComponent } from './reg-paquetes-emisor/reg-paquetes-emisor.component';
import { BuscarPaqEntregarReceptorComponent } from './buscar-paq-entregar-receptor/buscar-paq-entregar-receptor.component';
import { BuscarPaqSoloComponent } from './buscar-paq-solo/buscar-paq-solo.component';



export const Register_routes: Routes = [
    
    {
        path:'RegistrarPaqueteEmisor',
        component: RegPaquetesEmisorComponent
    },
    {
        path:'BuscarEntregarPaquete',
        component: BuscarPaqEntregarReceptorComponent
    },
    {
        path:'SoloBuscarPaquete',
        component: BuscarPaqSoloComponent
    },
    
]