import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Router} from '@angular/router'

@Component({
  selector: 'anand-user-layout',
  standalone: true,
  imports: [  RouterOutlet, RouterModule],
  templateUrl: './user-layout.html',
  styleUrls: ['user-layout.css'] 
})
export class UserLayout {
  
constructor(private router: Router){}
  
  logout(){
    this.router.navigate(['/auth/login']);
  }
}
