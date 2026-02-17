import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ManageUsers } from './manage-users/manage-users';
import { Reports} from './reports/reports';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: Dashboard },
  { path: 'users', component: ManageUsers },
  { path: 'reports', component: Reports }
];