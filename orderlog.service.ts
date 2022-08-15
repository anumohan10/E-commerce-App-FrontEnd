import { Injectable } from '@angular/core';
import { orderlog } from './orderLog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application'
  })
}

@Injectable()
export class orderlogServiceService {

  constructor(private httpClient: HttpClient) { }
  getorderlog() : Observable<orderlog[]> {
    let url = "http://localhost:8080/MLP290/api/orderlog"
    return this.httpClient.get<orderlog[]>(url);
  }
  getorderlogbyCustId(custId: number) : Observable<orderlog[]> {
    let url = "http://localhost:8080/MLP290/api/orderlog/showbycustId/"+custId
    return this.httpClient.get<orderlog[]>(url);
  }
  placeOrder(custId: number, foodId: number, vendorId: number, quantity: number) {
    let url = "http://localhost:8080/MLP290/api/placeorder/placeorder/"+custId+"/"+foodId+"/"+vendorId+"/"+quantity
    return this.httpClient.post<any>(url, custId, httpOptions);
  }
}
