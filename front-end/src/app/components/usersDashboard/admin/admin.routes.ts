import { Routes } from '@angular/router';
import { Register_routes } from '../register/register.routes';
import { Manloader_routes } from '../manloader/manloader.routes';
import { AdmUsuariosDashboardComponent } from './adm-usuarios/adm-usuarios-dashboard/adm-usuarios-dashboard.component';
import { AdmUsuariosLayoutOptionsComponent } from './adm-usuarios/adm-usuarios-layout-options/adm-usuarios-layout-options.component';
import { AdmCamionesDashboardComponent } from './adm-camiones/adm-camiones-dashboard/adm-camiones-dashboard.component';
import { AdmCamionesLayoutOptionsComponent } from './adm-camiones/adm-camiones-layout-options/adm-camiones-layout-options.component';
import { AdmContenedoresDashboardComponent } from './adm-contenedores/adm-contenedores-dashboard/adm-contenedores-dashboard.component';
import { AdmContenedoresLayoutOptionsComponent } from './adm-contenedores/adm-contenedores-layout-options/adm-contenedores-layout-options.component';
import { AdmSucursalesDashboardComponent } from './adm-sucursales/adm-sucursales-dashboard/adm-sucursales-dashboard.component';
import { AdmSucursalesLayoutOptionsComponent } from './adm-sucursales/adm-sucursales-layout-options/adm-sucursales-layout-options.component';




let restOfAdminRoutes: Routes = [
    {
        path: '',
        children:[
            {
                path:'AdministrarUsuarios',
                component:AdmUsuariosDashboardComponent
            },
            {
                path:'AdministrarCamiones',
                component:AdmCamionesDashboardComponent
            },
            {
                path:'AdministrarContenedores',
                component: AdmContenedoresDashboardComponent
            },
            {
                path:'AdministrarSucursales',
                component: AdmSucursalesDashboardComponent
            }

        ]
    },
    {
        path: 'AdministrarUsuarios',
        component: AdmUsuariosLayoutOptionsComponent,
        loadChildren: () => import('./adm-usuarios/adm-usuarios.routes').then(m=>m.AdmUsuariosRoutes)
    },
    {
        path: 'AdministrarCamiones',
        component: AdmCamionesLayoutOptionsComponent,
        loadChildren: () => import('./adm-camiones/adm-camiones.routes').then(m=>m.AdmCamionesRoutes)
    },
    {
        path: 'AdministrarContenedores',
        component: AdmContenedoresLayoutOptionsComponent,
        loadChildren: () => import('./adm-contenedores/adm-contenedores.routes').then(m=>m.AdmContenedoresRoutes)
    },
    {
        path: 'AdministrarSucursales',
        component: AdmSucursalesLayoutOptionsComponent,
        loadChildren: () => import ('./adm-sucursales/adm-sucursales.routes').then(m=>m.AdmSucursalesRoutes)
    }
];

export const Admin_routes: Routes = restOfAdminRoutes.concat(Register_routes,Manloader_routes);