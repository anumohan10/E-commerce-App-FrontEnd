import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuServiceService } from 'src/app/menu.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { OrderlogComponent } from './orderlog/orderlog.component';
import { MenuComponent } from './menu/menu.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorComponent } from './vendor/vendor.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ComponentComponent } from './component/component.component';
import { CLoginComponent } from './c-login/c-login.component';
import { CustdashboardComponent } from './custdashboard/custdashboard.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CustsignupComponent } from './custsignup/custsignup.component';
const routes:Routes=[
    {path:'', component:HomeComponent},
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    OrderstatusComponent,
    CustomerComponent,
    VendorComponent,
    CartComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    ComponentComponent,
    CLoginComponent,
    ChatbotComponent,
    CustsignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MenuServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
