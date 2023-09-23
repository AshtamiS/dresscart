import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
  uname=""
  email=""
  pswd=""


  unameChange(event:any){
    this.uname=event.target.value
    console.log(this.uname);
    
  }
  emailChange(event:any){
    this.email=event.target.value
    console.log(this.email);
    
  }
  pswdChange(event:any){    
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }
  register(){
    var uname=this.uname
    var email=this.email
    var pswd=this.pswd
    
    const result=this.ds.register(uname,email,pswd)
    if(result){
      this.router.navigateByUrl('loginpage')
    }
    else{
      alert('failed')
      this.router.navigateByUrl('register')

    }
  }
  

userDetails:any={
1:{uname:"a",email:1,password:1}
}


constructor(private ds:DataService,private router:Router){  }
ngOnInit():void{}
 
}


















