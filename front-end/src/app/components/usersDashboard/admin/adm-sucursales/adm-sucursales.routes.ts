import { Routes } from "@angular/router";
import { CambiarDatosSucursalComponent } from "./cambiar-datos-sucursal/cambiar-datos-sucursal.component";
import { InscribirSucursalEnDestinoComponent } from "./inscribir-sucursal-en-destino/inscribir-sucursal-en-destino.component";
import { RegistrarDestinoComponent } from "./registrar-destino/registrar-destino.component";

export const AdmSucursalesRoutes: Routes = [
    {
        path: 'CambiarDatosSucursal',
        component: CambiarDatosSucursalComponent
    },
    {
        path: 'InscribirSucursalEnDestino',
        component: InscribirSucursalEnDestinoComponent
    },
    {
        path: 'RegistrarDestino',
        component: RegistrarDestinoComponent
    }
]