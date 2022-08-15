import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CartServiceService {

  constructor(private httpClient: HttpClient) { }
  getCart() : Observable<Cart[]> {
    let url = "http://localhost:8080/MLP290/api/cart"
    return this.httpClient.get<Cart[]>(url);
  }
}
