import { Injectable } from '@angular/core';
import { orderstatus } from './orderstatus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class orderstatusServiceService {

  constructor(private httpClient: HttpClient) { }
  getorderstatus() : Observable<orderstatus[]> {
    let url = "http://localhost:8080/MLP290/api/orderstatus"
    return this.httpClient.get<orderstatus[]>(url);
  }
}
