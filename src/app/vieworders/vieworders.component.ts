import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {
constructor(private ord:OrdersService){}
allorders:any;
ngOnInit(){
  this.ord.getOrders().subscribe((data)=>{
    this.allorders=data;
  })
}
}
