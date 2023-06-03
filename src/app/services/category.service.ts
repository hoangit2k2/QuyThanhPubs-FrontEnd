import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<Category[]>(environment.apiBase+ "admin/category");
  }
  getCategoryById(id: number) {
    return this.http.get<Category>(environment.apiBase+ `admin/category/${id}`);
  }
  deleteCategoryById(id: number) {
    return this.http.delete<Category>(environment.apiBase+ `admin/category/${id}`);
  }
  updateCategory(id: number, category: Category){
    return this.http.put(environment.apiBase + `admin/category/${id}`,category);
  }
  createCategory(category: Category){
    return this.http.post<Category>(environment.apiBase+ "admin/category", category);
  }

}
