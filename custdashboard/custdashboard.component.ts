import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custdashboard',
  templateUrl: './custdashboard.component.html',
  styleUrls: ['./custdashboard.component.css']
})
export class CustdashboardComponent implements OnInit {

  constructor(private router: Router) { }
  display = false;
  ngOnInit() {
  }
  btnClick(){
    this.display = !this.display;
    this.router.navigateByUrl('custprofile');
  }
  btnWallet(){
    this.display = !this.display;
    this.router.navigateByUrl('wallet');
  }
  btnReviews(){
    this.display = !this.display;
    this.router.navigateByUrl('reviews');
  }
  btnOrder(){
    this.display = !this.display;
    this.router.navigateByUrl('orderstatus');
  }
}
