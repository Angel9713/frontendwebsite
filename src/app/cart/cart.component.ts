import { Component } from '@angular/core';
import { Product } from '../services/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartitems:Product[]=[];
 constructor(private cart:CartService){}
 ngOnInit(){
  this.cart.getcart().subscribe((data)=>{
    this.cartitems=data;
  })
 }
 addtocart(product:Product){
  let ind=this.cartitems.findIndex(p=>p.id==product.id)
  if(ind==-1){
    this.cartitems.push(product);
    return "Added successfully"
  }
  else{
    return "Item already existed"
  }
 }

 
}
