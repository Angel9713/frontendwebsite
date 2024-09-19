import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { LoveService } from '../services/love.service';
import { UserorderService } from '../services/userorder.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent {
constructor(private service:ProductService,private ar:ActivatedRoute,private love:LoveService,private user:UserorderService){}
pid:any;product:any;
ngOnInit(){
  this.pid=this.ar.snapshot.paramMap.get('id');
  this.product=this.service.getProductsById(this.pid);
  console.log(this.product)
}
wishlist(pro:any){
    this.love.addwishlist(pro);
  }
order(product:any){
   this.user.orderpro(product)
}
}

