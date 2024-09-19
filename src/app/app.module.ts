import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { EnterComponent } from './enter/enter.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { UserorderComponent } from './userorder/userorder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    AddproductComponent,
    ViewordersComponent,
    ManageproductsComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    UserprofileComponent,
    EnterComponent,
    ViewproductsComponent,
    WishlistComponent,
    ViewdetailsComponent,
    OrderdetailsComponent,
    UserorderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
