import { Injectable } from '@angular/core';
import { Product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoveService {
  favitems:Product[]=[]
  constructor() { }
  
 
  addwishlist(p: Product) {
    this.favitems.push(p);
  }
  getfav() {
    return of(this.favitems)
  }
}
