import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  loguser:any
  name:any
  constructor(private route:Router){}
ngOnInit(){
this.loguser=localStorage.getItem('admin')
this.loguser=JSON.parse(this.loguser)
this.name=this.loguser.username
}
logout(){
  localStorage.removeItem('admin');
  this.route.navigateByUrl('');
}
}
