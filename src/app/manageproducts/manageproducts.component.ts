import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
constructor(private service:ProductService){}
productlist:Product[]=[];
deleteme(pid:any){
  let res=this.service.deleteProducts(pid);
  alert(res);
}
editcontent(p:any){
  p.pflag=true;
}
updateme(p:any){
  p.pflag=false;
  let res=this.service.updateProducts(p);
}
ngOnInit(){
  this.service.getProducts().subscribe((data)=>{
    this.productlist=data;
  })
}
}
