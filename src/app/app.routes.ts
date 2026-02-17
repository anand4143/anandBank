import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { UserLayout } from './layouts/user-layout/user-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';


export const routes: Routes = [
    // AUTH ROUTES
  {
    path: 'auth',
    component: AuthLayout,
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },

  // USER ROUTES
  {
    path: 'user',
    component: UserLayout,
    loadChildren: () =>
      import('./features/user/user.routes')
        .then(m => m.USER_ROUTES)
  },

  // ADMIN ROUTES
  {
    path: 'admin',
    component: AdminLayout,
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  },

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
];
