import { Injectable } from '@angular/core';
import { CLogin } from './c-login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CLoginServiceService {

  constructor(private httpClient: HttpClient) { }
  getMenu() : Observable<CLogin[]> {
    let url = "http://localhost:8080/MLP290/api/CLogin/CLoginlogin"
    return this.httpClient.get<CLogin[]>(url);
  }
  getLogin(custEid:string, pwd:string) : Observable<CLogin[]> {
    let url = "http://localhost:8080/MLP290/api/CLogin/CLoginlogin/" +custEid +pwd;
    return this.httpClient.get<CLogin[]>(url);
  }
  
}
