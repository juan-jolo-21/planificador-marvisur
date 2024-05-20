import { Routes } from '@angular/router';

import { authGuard, authGuardMatch } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/usersDashboard/admin/admin-dashboard/admin-dashboard.component';
import { ManloaderDashboardComponent } from './components/usersDashboard/manloader/manloader-dashboard/manloader-dashboard.component';
import { RegisterDashboardComponent } from './components/usersDashboard/register/register-dashboard/register-dashboard.component';
import { OnlyAdminComponent } from './components/usersDashboard/admin/only-admin/only-admin.component';
import { UserLayoutComponent } from './components/usersDashboard/user-layout/user-layout.component';
import { RegisterLayoutOptionsComponent } from './components/usersDashboard/register/register-layout-options/register-layout-options.component';
import { AdminLayoutOptionsComponent } from './components/usersDashboard/admin/admin-layout-options/admin-layout-options.component';
import { ManloaderLayoutOptionsComponent } from './components/usersDashboard/manloader/manloader-layout-options/manloader-layout-options.component';

//angular 17 al implementar componentes independientes (standalone)
export const routes: Routes = [
    {
        path: '',
        component:LoginComponent
    },
    {
        path: '',
        component: UserLayoutComponent,
        canActivate :[authGuard],
        children: [
            {
                path: 'admin',
                component:AdminDashboardComponent,
                
            },
            {
                path: 'manloader',
                component:ManloaderDashboardComponent,

            },
            {
                path: 'register',
                component:RegisterDashboardComponent,
                
            }
        ]
    },
    {
        path: 'register',
        component: RegisterLayoutOptionsComponent,
        loadChildren: () => import ('./components/usersDashboard/register/register.routes').then(m=>m.Register_routes)
    },
    {
        path: 'admin',
        component: AdminLayoutOptionsComponent,
        loadChildren: () => import ('./components/usersDashboard/admin/admin.routes').then(m=>m.Admin_routes)
    },
    {
        path: 'manloader',
        component: ManloaderLayoutOptionsComponent,
        loadChildren: () => import ('./components/usersDashboard/manloader/manloader.routes').then(m=>m.Manloader_routes)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
