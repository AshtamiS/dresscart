import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginpage(){
 
    this.router.navigateByUrl('loginpage')

 }
 constructor(private router:Router){  }
 ngOnInit():void{}

}
