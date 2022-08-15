import { Injectable } from '@angular/core';
import { Wallet } from './wallet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class WalletServiceService {

  constructor(private httpClient: HttpClient) { }
  getWallet() : Observable<Wallet[]> {
    let url = "http://localhost:8080/MLP290/api/wallet"
    return this.httpClient.get<Wallet[]>(url);
  }
  getWalletbycustId(walletId:number) : Observable<Wallet[]> {
    let url = "http://localhost:8080/MLP290/api/wallet/showbywalletId/" + walletId;
    return this.httpClient.get<Wallet[]>(url);
  }
}
