import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/usersDashboard/admin/admin-dashboard/admin-dashboard.component';
import { authGuard } from './guards/auth.guard';

//angular 17 al implementar componentes independientes (standalone)
export const routes: Routes = [
    {
        path: '',
        component:LoginComponent,
        canActivate:[authGuard]
    },
    {
        path: 'dashboard',
        component:AdminDashboardComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
