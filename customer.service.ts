import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) { }
  getMenu() : Observable<Customer[]> {
    let url = "http://localhost:8080/MLP290/api/customer/customerlogin"
    return this.httpClient.get<Customer[]>(url);
  }
  getLogin(custEid:string, pwd:string) : Observable<Customer[]> {
    let url = "http://localhost:8080/MLP290/api/customer/customerlogin/" +custEid +pwd;
    return this.httpClient.get<Customer[]>(url);
  }
  
}
