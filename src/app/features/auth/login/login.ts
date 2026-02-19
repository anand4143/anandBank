import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginType: number = 0;  // 0 = User , 1 = Admin
  constructor(private router: Router) {}

switchToAdmin() {
  this.loginType = 1;
}

switchToUser() {
  this.loginType = 0;
}

login(){
  this.router.navigate(['/user/dashboard']);
}

}
