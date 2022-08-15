import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-custsignup',
  templateUrl: './custsignup.component.html',
  styleUrls: ['./custsignup.component.css']
})
export class CustsignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  btnSignIn() {
    this.router.navigateByUrl('custdashboard');
  }

}
