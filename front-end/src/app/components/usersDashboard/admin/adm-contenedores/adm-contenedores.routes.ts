import { Routes } from "@angular/router";
import { AsignarContenedorLibreCamionComponent } from "./asignar-contenedor-libre-camion/asignar-contenedor-libre-camion.component";
import { IntercambiarContenedorCamionComponent } from "./intercambiar-contenedor-camion/intercambiar-contenedor-camion.component";
import { MarcarContenedorNoDisponibleComponent } from "./marcar-contenedor-no-disponible/marcar-contenedor-no-disponible.component";
import { VerContenedoresLibresPorSedeComponent } from "./ver-contenedores-libres-por-sede/ver-contenedores-libres-por-sede.component";
import { VerTodosLosContenedoresComponent } from "./ver-todos-los-contenedores/ver-todos-los-contenedores.component";

export const AdmContenedoresRoutes : Routes = [
    {
        path: 'AsignarContenedorLibreCamion',
        component: AsignarContenedorLibreCamionComponent
    },
    {
        path: 'IntercambiarContenedorCamion',
        component: IntercambiarContenedorCamionComponent
    },
    {
        path: 'MarcarContenedorNoDisponible',
        component: MarcarContenedorNoDisponibleComponent
    },
    {
        path: 'VerContenedoresLibresPorSede',
        component: VerContenedoresLibresPorSedeComponent
    },
    {
        path:'VerTodosLosContenedores',
        component: VerTodosLosContenedoresComponent
    }
]
