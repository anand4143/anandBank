import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(private api: Api) {}

  getDashboard() {
    return this.api.get('user/dashboard');
  }

  getAccounts() {
    return this.api.get('user/accounts');
  }

  transferMoney(data: any) {
    return this.api.post('user/transfer', data);
  }

  getTransactions() {
    return this.api.get('user/transactions');
  }
}
