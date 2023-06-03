import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient) { }

  getProductsByCategory(id?: number){
    return this.http.get<Product[]>(environment.apiBase+ `admin/product?categoryId=${id}`);
  }
  getAllProducts(){
    return this.http.get<Product[]>(environment.apiBase+ `admin/product`);
  }
}
