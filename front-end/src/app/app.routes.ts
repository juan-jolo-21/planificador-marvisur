import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/usersDashboard/admin/admin-dashboard/admin-dashboard.component';
import { authGuard, authGuardMatch } from './guards/auth.guard';
import { ManloaderDashboardComponent } from './components/usersDashboard/manloader/manloader-dashboard/manloader-dashboard.component';
import { RegisterDashboardComponent } from './components/usersDashboard/register/register-dashboard/register-dashboard.component';
import { OnlyAdminComponent } from './components/usersDashboard/admin/only-admin/only-admin.component';
import { UserLayoutComponent } from './components/usersDashboard/user-layout/user-layout.component';

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
        path: '**',
        component: NotFoundComponent
    }
];
