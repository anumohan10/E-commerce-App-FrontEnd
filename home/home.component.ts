import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu.service';
import { Menu } from '../menu';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[MenuServiceService]
 
})
export class HomeComponent implements OnInit {
  errorMsg : any;
  username: string;
  menus: Menu[];
  menuid: Menu[];
  foodId: number;
 
  constructor(private menuServ : MenuServiceService, private router: Router) { }
  loginCus = new FormGroup({
    foodId: new FormControl(''),
    });
  getMenubyId() {
    this.menuServ.getMenubyId(this.loginCus.value.foodId)
    .subscribe(
      data => this.menuid = data,
      error => this.errorMsg = error
    );
    console.log(this.menuid);
  }

  ngOnInit() {
    this.menuServ.getMenu()
    .subscribe(
      data => this.menus = data,
      error => this.errorMsg = error
    );
    console.log(this.menus);

  }
  btnSignup(){
    this.router.navigateByUrl('custsignup');
  }
  btnLogin(){
    this.router.navigateByUrl('custdashboard');
  }
  btnVenSignup(){
    this.router.navigateByUrl('vendorsignup');
  }

}
