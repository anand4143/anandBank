import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Accounts } from './accounts/accounts';
import { Transactions } from './transactions/transactions';

export const USER_ROUTES: Routes = [
  { path: '', component: Dashboard },
  { path: 'accounts', component: Accounts },
  { path: 'transactions', component: Transactions }
];
