import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserorderService {

  constructor() { }
  userorder:any;
  orderpro(pro:any){
     this.userorder=pro
  }
  returnorder(){
    return this.userorder
  }
}
