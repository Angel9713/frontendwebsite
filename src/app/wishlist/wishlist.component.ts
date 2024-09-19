import { Component } from '@angular/core';
import { LoveService } from '../services/love.service';
import { Product } from '../services/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
    constructor(private cart:LoveService){}
cartitems:Product[]=[]
ngOnInit(){
this.cart.getfav().subscribe((data)=>{
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
