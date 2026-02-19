import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Accounts } from './accounts/accounts';
import { Transactions } from './transactions/transactions';
import { Fundtransfer } from './fundtransfer/fundtransfer';

export const USER_ROUTES: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'fundTransfer', component: Fundtransfer },
  { path: 'accounts', component: Accounts },
  { path: 'transactions', component: Transactions }
];
