import { Routes } from '@angular/router';
import { DescargarContenedorComponent } from './descargar-contenedor/descargar-contenedor.component';
import { VerPaquetesPorSedeSinEntregarComponent } from './ver-paquetes-por-sede-sin-entregar/ver-paquetes-por-sede-sin-entregar.component';

import { AsignarPaquetesContenedorComponent } from './asignar-paquetes-contenedor/asignar-paquetes-contenedor.component';
import { MarcarLlegadaContenedorComponent } from './marcar-llegada-contenedor/marcar-llegada-contenedor.component';
import { MarcarPartidaContenedorComponent } from './marcar-partida-contenedor/marcar-partida-contenedor.component';
import { FinalizarCargaContenedorComponent } from './finalizar-carga-contenedor/finalizar-carga-contenedor.component';
import { LiberarContenedorComponent } from './liberar-contenedor/liberar-contenedor.component';

export const Manloader_routes: Routes = [
    {
        path:'DescargarContenedor',
        component: DescargarContenedorComponent
    },
    {
        path: 'VerPaquetesPorSedeSinEntregar',
        component: VerPaquetesPorSedeSinEntregarComponent
    },
    {
        path: 'FinalizarCargaPaquetes',
        component: FinalizarCargaContenedorComponent
    },
    {
        path: 'AsignarPaquetesContenedor',
        component: AsignarPaquetesContenedorComponent
    },
    {
        path:'MarcarLlegadaContenedor',
        component: MarcarLlegadaContenedorComponent
    },
    {
        path:'LiberarContenedor',
        component: LiberarContenedorComponent
    },
    {
        path:'MarcarPartidaContenedor',
        component: MarcarPartidaContenedorComponent
    }
]