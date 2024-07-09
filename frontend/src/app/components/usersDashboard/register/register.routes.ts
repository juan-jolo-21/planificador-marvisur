import { Routes } from '@angular/router';


import { RegPaquetesEmisorComponent } from './reg-paquetes-emisor/reg-paquetes-emisor.component';
import { BuscarPaqEntregarReceptorComponent } from './buscar-paq-entregar-receptor/buscar-paq-entregar-receptor.component';
import { VerPaquetesPorSedeSinEntregarComponent } from '../manloader/ver-paquetes-por-sede-sin-entregar/ver-paquetes-por-sede-sin-entregar.component';




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
        path:'VerPaquetesSinEntregar',
        component: VerPaquetesPorSedeSinEntregarComponent
    },
    
]