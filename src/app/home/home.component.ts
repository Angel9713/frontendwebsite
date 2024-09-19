import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   constructor(private prod:ProductService){}
   num:any;
   price:any;
   ngOnInit(){
  this.num=this.prod.totalproducts()
  this.price=this.prod.totalprice()
   }
}
