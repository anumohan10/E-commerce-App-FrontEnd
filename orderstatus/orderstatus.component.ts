import { Component, OnInit } from '@angular/core';
import { orderstatusServiceService } from '../orderstatus.service';
import { orderstatus } from '../orderstatus';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css'],
  providers:[orderstatusServiceService]
})
export class OrderstatusComponent implements OnInit {

  errorMsg : any;
  orderstatuss: orderstatus[];

  constructor(private orderstatusServ : orderstatusServiceService) { }
  loginCus = new FormGroup({
    id: new FormControl(''),
    });

  ngOnInit() {
    this.orderstatusServ.getorderstatus()
    .subscribe(
      data => this.orderstatuss = data,
      error => this.errorMsg = error
    );
    console.log(this.orderstatuss);

  }
}
 