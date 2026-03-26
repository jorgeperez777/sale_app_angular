import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse, ProductResponseInfo } from '../models/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  getProducts(params: HttpParams): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl + '/api/v1/products', { params: params });
  }

  getProduct(params: HttpParams): Observable<ProductResponseInfo> {
    return this.http.get<ProductResponseInfo>(this.apiUrl + '/api/v1/product', { params: params });
  }
}
