import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'anand-admin-layout',
  standalone: true,
  imports: [Header, RouterOutlet],
  template: `
    <anand-header></anand-header>

    <div class="admin-wrapper">
      <div class="sidebar">
        <ul>
          <li routerLink="/admin/dashboard">Dashboard</li>
          <li routerLink="/admin/users">Manage Users</li>
          <li routerLink="/admin/loans">Loan Approvals</li>
        </ul>
      </div>

      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .admin-wrapper {
      display: flex;
      height: calc(100vh - 60px);
    }

    .sidebar {
      width: 220px;
      background: #002b5b;
      color: white;
      padding: 20px;
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar li {
      padding: 10px 0;
      cursor: pointer;
    }

    .content {
      flex: 1;
      padding: 20px;
      background: #f4f6f9;
    }
  `]
})
export class AdminLayout {}
