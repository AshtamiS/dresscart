import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'loginpage',component:LoginpageComponent
  },
  {
    path:'register',component:RegisterComponent
  },
   {
    path:'dashboard',component:DashboardComponent
   },
   {
    path:'cart',component:CartComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
