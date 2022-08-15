import { Component, OnInit } from '@angular/core';
import { orderlogServiceService } from '../orderlog.service';
import { orderlog } from '../orderlog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { updateBinding } from '@angular/core/src/render3/instructions';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-orderlog',
  templateUrl: './orderlog.component.html',
  styleUrls: ['./orderlog.component.css'],
  providers:[orderlogServiceService]
})
export class OrderlogComponent implements OnInit {

  errorMsg : any;
  orderlogs: orderlog[];

  constructor(private orderlogService: orderlogServiceService) { }
    
    loginCus = new FormGroup({
    itemId: new FormControl(''),
    });

  ngOnInit() {
    this.orderlogService.getorderlogbyCustId(1)
    .subscribe(
      data => this.orderlogs = data,
      error => this.errorMsg = error
    );
    console.log(this.orderlogs);
  }
  update() {
    let custId: number = parseInt((<HTMLInputElement>document.getElementById("custId")).value)
    let itemId: number = parseInt((<HTMLInputElement>document.getElementById("itemId")).value)
    let vendorId: number = parseInt((<HTMLInputElement>document.getElementById("vendorId")).value)
    let quantity: number = parseInt((<HTMLInputElement>document.getElementById("quantity")).value)
    this.orderlogService.placeOrder(custId, itemId, vendorId, quantity)
  }
}

