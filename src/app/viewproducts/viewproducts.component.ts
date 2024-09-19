import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {
  constructor(private service:ProductService, private cart:CartService,private route:Router){}
  productlist:Product[]=[];
  ngOnInit(){
     this.service.getProducts().subscribe((data:any)=>{
      this.productlist=data;
     })
  }
  addtocart(p:any){
    this.cart.addcart(p);
  }
  details(id:any){
    this.route.navigateByUrl('/user/details/'+id)
  }
}
