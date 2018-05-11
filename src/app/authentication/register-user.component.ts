import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.css'] 
})

export class RegisterUserComponent implements OnInit {

    newUser = { email: '', password: ''};
    

    constructor(public authService: AuthService) {}

    ngOnInit() {

    }

    registerUser(){
       this.authService.register(this.newUser.email, this.newUser.password)
       .then(createdUser => {
           console.log('createdUser', createdUser);
           //TODO RESET FORM
       })
       .catch(error => console.log(error.message));
    }
    
}