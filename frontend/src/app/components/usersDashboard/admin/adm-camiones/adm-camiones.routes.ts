import { Routes } from "@angular/router";
import { CambiarEstadoCamionComponent } from "./cambiar-estado-camion/cambiar-estado-camion.component";
import { VerCamionesTodosPorSedeComponent } from "./ver-camiones-todos-por-sede/ver-camiones-todos-por-sede.component";
import { InsertarDatosCamionComponent } from "./insertar-datos-camion/insertar-datos-camion.component";
import { ModificarDatosCamionComponent } from "./modificar-datos-camion/modificar-datos-camion.component";
import { EliminarDatosCamionComponent } from "./eliminar-datos-camion/eliminar-datos-camion.component";

export const AdmCamionesRoutes : Routes = [
    {
        path:'CambiarEstadoCamion',
        component:CambiarEstadoCamionComponent
    },
    {
        path:'VerCamionesTodosPorSede',
        component: VerCamionesTodosPorSedeComponent
    },
    {
        path:'InsertarDatosCamion',
        component:InsertarDatosCamionComponent
    },
    {
        path:'ModificarDatosCamion',
        component: ModificarDatosCamionComponent
    },
    {
        path:'EliminarDatosCamion',
        component:EliminarDatosCamionComponent
    }
]