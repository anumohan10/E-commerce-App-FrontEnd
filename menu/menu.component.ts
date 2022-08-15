import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu.service';
import { Menu } from '../menu';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[MenuServiceService]
})
export class MenuComponent implements OnInit {
  errorMsg : any;
  username: string;
  menus: Menu[];
  menuid: Menu[];
  foodId: number;

  constructor(private menuServ : MenuServiceService) { }
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
}
