import { Injectable } from '@angular/core';
import { productDesc } from '../models/product-desc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = 'http://localhost:5000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  // add api service
  productList: productDesc[] = [];
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<productDesc[]> {
    return this.http.get<productDesc[]>(apiURL);
  }
}
