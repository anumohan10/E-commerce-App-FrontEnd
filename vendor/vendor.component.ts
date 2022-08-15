import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnSign(){
    this.router.navigateByUrl('vendordashboard');
  }

}
