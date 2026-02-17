import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'anand-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  logout(){
    alert("You Logout....");
  }
}
