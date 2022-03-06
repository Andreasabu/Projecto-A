import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public productsURL : string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products'
  constructor() { }
  public getProducts (){
    return ajax (this.productsURL)
  }
}
