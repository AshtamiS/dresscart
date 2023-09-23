import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cart(){
 
    this.router.navigateByUrl('cart')

 }
 constructor(private router:Router){  }
 ngOnInit():void{}
}
