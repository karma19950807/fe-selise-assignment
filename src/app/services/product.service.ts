import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductsModel } from '../products/products.model';
import { Products } from '../products/list-products/list-products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  listProducts() {
    return this.http.get<Products[]>(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  viewProduct(id: number) {
    return this.http.get<Products>(this.baseUrl + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addProduct(data: any) {
    return this.http.post<Products>(this.baseUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<Products>(this.baseUrl + '/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  editProduct(id: number, data: ProductsModel) {
    debugger;
    return this.http.put<Products>(this.baseUrl + '/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
