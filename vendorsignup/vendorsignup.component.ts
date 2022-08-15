import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnLogin(){
    this.router.navigateByUrl('vendor');
  }
  btnSignIn(){
    this.router.navigateByUrl('vendordashboard');
  }

}
