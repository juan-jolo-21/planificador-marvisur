import { Routes } from "@angular/router";
import { CrearUsuariosComponent } from "./crear-usuarios/crear-usuarios.component";
import { ModificarUsuariosComponent } from "./modificar-usuarios/modificar-usuarios.component";
import { EliminarUsuariosComponent } from "./eliminar-usuarios/eliminar-usuarios.component";

export const AdmUsuariosRoutes : Routes = [
    
    {
        path: 'CrearUsuario',
        component: CrearUsuariosComponent
    },
    {
        path: 'ModificarUsuario',
        component: ModificarUsuariosComponent
    },
    {
        path: 'EliminarUsuario',
        component: EliminarUsuariosComponent
    }
]