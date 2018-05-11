import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  existingUser = { email: '', password: '' };

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.existingUser.email, this.existingUser.password)
      .then(value => {
        console.log('login réussi :)', value);
      })
      .catch(err => {
        console.log('erreur :(', err.message);
      })
  }

  logoutUser() {
    this.authService.logout();
  }
}
