import { Injectable } from '@angular/core';
import { Reviews } from './reviews';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ReviewsServiceService {

  constructor(private httpClient: HttpClient) { }
  getReviews() : Observable<Reviews[]> {
    let url = "http://localhost:8080/MLP290/api/reviews"
    return this.httpClient.get<Reviews[]>(url);
  }
  getReviewsbycustId(custId:number) : Observable<Reviews[]> {
    let url = "http://localhost:8080/MLP290/api/reviews/reviewsbycustId/" + custId;
    return this.httpClient.get<Reviews[]>(url);
  }
}
