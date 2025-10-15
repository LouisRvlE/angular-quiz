import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: any[] = [];
  categoryName: string = '';

  constructor(private http: HttpClient) {}

  getCategories() {
    if (this.categories.length > 0) return;
    this.http
      .get('http://localhost:3001/categories')
      .subscribe((categories: any) => {
        for (const category of categories) {
          this.categories.push(category);
        }
      });
  }
}
