import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CartComponent } from './cart/cart.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { EnterComponent } from './enter/enter.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { UserorderComponent } from './userorder/userorder.component';

const routes: Routes = [
  {path:'',component:EnterComponent},
  {path:'sign',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ViewproductsComponent},
      {path:'createnew',component:AddproductComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'manage',component:ManageproductsComponent}
    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ViewproductsComponent},
      {path:'cart',component:CartComponent},
      {path:'details/:id',component:ViewdetailsComponent},
      {path:'wish',component:WishlistComponent},
      {path:'order',component:UserorderComponent}
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
