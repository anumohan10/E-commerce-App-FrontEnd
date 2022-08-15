import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { MenuComponent } from './menu/menu.component'
import { OrderlogComponent } from './orderlog/orderlog.component'
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CLoginComponent } from './c-login/c-login.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { WalletComponent } from './wallet/wallet.component';
import { CustprofileComponent } from './custprofile/custprofile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorsignupComponent } from './vendorsignup/vendorsignup.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { FaqComponent } from './faq/faq.component';
import { CustsignupComponent } from './custsignup/custsignup.component';
const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'orderlog', component: OrderlogComponent},
  { path: 'orderstatus', component: OrderstatusComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'cart', component: CartComponent},
  { path: 'about', component: AboutComponent},
  { path: 'clogin', component: CLoginComponent},
  { path: 'custdashboard', component: CustdashboardComponent},
  { path: 'wallet', component:WalletComponent},
  { path: 'custprofile', component:CustprofileComponent},
  { path: 'reviews', component:ReviewsComponent},
  { path: 'vendor', component:VendorComponent},
  { path: 'vendorsignup', component:VendorsignupComponent},
  { path: 'vendordashboard', component:VendordashboardComponent},
  { path: 'faq', component:FaqComponent },
  { path: 'custsignup', component:CustsignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenuComponent, HomeComponent, OrderlogComponent, CustomerComponent, HeaderComponent,
  OrderstatusComponent, CartComponent, AboutComponent, CLoginComponent, CustdashboardComponent, CustprofileComponent,
  ReviewsComponent, WalletComponent, VendorComponent, VendorsignupComponent, VendordashboardComponent, FaqComponent, CustsignupComponent]