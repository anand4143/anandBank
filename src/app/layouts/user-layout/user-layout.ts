import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'anand-user-layout',
  standalone: true,
  imports: [Header, RouterOutlet],
  templateUrl: './user-layout.html',
  styleUrls: ['user-layout.css'] 
})
export class UserLayout {}
