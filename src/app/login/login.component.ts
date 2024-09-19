import { parseSourceFile } from '@angular/cdk/schematics';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup=new FormGroup({})
constructor(private route:Router,private fb:FormBuilder){
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
}
reqpwd:any;
loggedinuser:any;
username:any;
password:any;
checklogin(){
  if(this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin"){
    this.route.navigateByUrl('/admin/home')
    this.loggedinuser={
    username:this.loginForm.value.username,
    password:this.loginForm.value.password
    }
    localStorage.setItem('admin',JSON.stringify(this.loggedinuser))
  }
  else{
    this.reqpwd=this.loginForm.value.username.slice(0,3);
    this.reqpwd=this.reqpwd+"123";
    if(this.reqpwd==this.loginForm.value.password){
      this.route.navigateByUrl('/user/home')
      this.loggedinuser={
        username:this.loginForm.value.username,
        password:this.loginForm.value.password
        }
        localStorage.setItem('user',JSON.stringify(this.loggedinuser))
    }
    else{
      this.route.navigateByUrl('')
    }
  }
}
}
