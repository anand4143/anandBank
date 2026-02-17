import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class Admin {

  constructor(private api: Api) {}

  getAllUsers() {
    return this.api.get('admin/users');
  }

  blockUser(userId: string) {
    return this.api.put(`admin/block/${userId}`, {});
  }

  getAllTransactions() {
    return this.api.get('admin/transactions');
  }

  getReports() {
    return this.api.get('admin/reports');
  }
}
