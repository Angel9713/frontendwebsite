import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  loguser:any
  name:any
  imglink:any;
  constructor(private cart:CartService,private route:Router){}
ngOnInit(){
this.loguser=localStorage.getItem('user')
this.loguser=JSON.parse(this.loguser)
this.name=this.loguser.username
if(this.name.endsWith('i')||this.name.endsWith('a')){
  this.imglink="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png"
}
else{
  this.imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Y9G87dBDgsJFFtTWEK-siIyL9IBm_64B8g&s"
}
}
cartlen:any;
ngDoCheck(){
  this.cartlen=this.cart.cartlength();
}

logout(){
  localStorage.removeItem('user');
  this.route.navigateByUrl('');
}
}
