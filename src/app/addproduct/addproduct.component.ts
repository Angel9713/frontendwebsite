import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
form:FormGroup=new FormGroup({})
constructor(private fb:FormBuilder,private service:ProductService,private route:Router){
  this.form=this.fb.group({
    id:['',Validators.required],
    title:['',Validators.required],
    image:['',Validators.required],
    price:['',Validators.required],
    category:['',Validators.required],
    description:['',Validators.required],
  })
}
addme(){
  let res=this.service.addProducts(this.form.value);
  // Swal.fire({
  //   title:"Good Job",
  //   icon:"success",
  //   text:"Product Added successfully"
  // });
  this.route.navigateByUrl('/admin/createnew')
}
}
