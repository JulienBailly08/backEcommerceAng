import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = `${environment.api+'products'+'?API_KEY='+environment.api_key}`;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
