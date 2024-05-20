import { Routes } from '@angular/router';
import { DescargarContenedorComponent } from './descargar-contenedor/descargar-contenedor.component';
import { VerPaquetesPorSedeSinEntregarComponent } from './ver-paquetes-por-sede-sin-entregar/ver-paquetes-por-sede-sin-entregar.component';
import { VerPaquetesRecibidosComponent } from './ver-paquetes-recibidos/ver-paquetes-recibidos.component';
import { AsignarPaquetesContenedorComponent } from './asignar-paquetes-contenedor/asignar-paquetes-contenedor.component';
import { MarcarLlegadaContenedorComponent } from './marcar-llegada-contenedor/marcar-llegada-contenedor.component';
import { MarcarPartidaContenedorComponent } from './marcar-partida-contenedor/marcar-partida-contenedor.component';

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
        path: 'VerPaquetesRecibidos',
        component: VerPaquetesRecibidosComponent
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
        path:'MarcarPartidaContenedor',
        component: MarcarPartidaContenedorComponent
    }
]