import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any={
    1:{uname:"a",email:10,password:10}
    }

  constructor() { }
  register(uname:any,email:any,password:any){
    var userDetails=this.userDetails
    if(uname in localStorage){
       return false
    }
    else{
      userDetails[uname]={
        uname,
        email,
        password
      }
      console.log(userDetails);
      return true
    }
  }

  login(email:any,pswd:any){
  var userDetails=this.userDetails
if(email in userDetails){
  if(pswd=userDetails[email]['password']){
     return true
  }
  else{
    alert("hsbvgxh bsn ")
    return false
    
  }
}
else{
  alert("hsbvgx")

  return false

}

  }
}
