import { Injectable } from '@angular/core';
import { Product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems: Product[] = [];
  constructor() { }
  addcart(p: Product) {
    this.cartitems.push(p);
  }
  getcart() {
    return of(this.cartitems)
  }
  cartlength(){
    return this.cartitems.length;
  }
}
