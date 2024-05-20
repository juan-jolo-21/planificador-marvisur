import { Routes } from '@angular/router';
import { Register_routes } from '../register/register.routes';
import { Manloader_routes } from '../manloader/manloader.routes';
import { AdministrarUsuariosComponent } from './administrar-usuarios/administrar-usuarios.component';
import { AdministrarCamionesComponent } from './administrar-camiones/administrar-camiones.component';
import { AdministrarSucursalesComponent } from './administrar-sucursales/administrar-sucursales.component';
import { AdministrarContenedoresComponent } from './administrar-contenedores/administrar-contenedores.component';

let restOfAdminRoutes: Routes = [
    {
        path: 'AdministrarUsuario',
        component: AdministrarUsuariosComponent
    },
    {
        path: 'AdministrarCamiones',
        component: AdministrarCamionesComponent
    },
    {
        path: 'AdministrarSucursales',
        component: AdministrarSucursalesComponent
    },
    {
        path: 'AdministrarContenedores',
        component: AdministrarContenedoresComponent
    }
];

export const Admin_routes: Routes = restOfAdminRoutes.concat(Register_routes,Manloader_routes);