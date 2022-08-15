import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer.service';
import { Customer } from '../customer';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerServiceService]
 
})
export class CustomerComponent implements OnInit {
  errorMsg : any;
  username: string;
  cust: Customer[];
  custId: number;
  custName:string;
  custEid:string;
  pwd:string;
  custAdd:string;
 
  constructor(private custServ : CustomerServiceService) { }
  loginCust = new FormGroup({
    custEid: new FormControl(''),
    pwd: new FormControl('')
    });
    getLogin() {
      this.custServ.getLogin(this.loginCust.value.custEid, this.loginCust.value.pwd)
      .subscribe(
        data => this.cust = data,
        error => this.errorMsg = error
      );
      console.log(this.cust);
    }
  ngOnInit() {
    this.custServ.getMenu()
    .subscribe(
      data => this.cust = data,
      error => this.errorMsg = error
    );

  }
}
