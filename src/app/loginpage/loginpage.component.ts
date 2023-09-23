import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {


  // event binding --3$event
  email=""
  pswd=""

  emailChange(event:any){
    this.email=event.target.value
    console.log(this.email);
    
  }
  pswdChange(event:any){    
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  login(){
    var email=this.email
    var pswd=this.pswd
const result=this.ds.login(email,pswd)  



if(result){
  alert('login success')
  this.router.navigateByUrl('dashboard')
}

//      if(email in userDetails){
// if(pswd==userDetails[email]['password']){
//   alert('login success')
//   this.router.navigateByUrl('dashboard')
// }
// else{
//   alert('invalid pswd')
// }
//      }
//      else{
//       alert('invalisd user details')
//      }
    }

userDetails:any={
1:{email:1,password:1}
}



  constructor(private router:Router,private ds:DataService){  }
   ngOnInit():void{}
}
