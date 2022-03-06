import { Component, OnInit } from '@angular/core';
import { ProductInterface } from './models/product.model';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
public Products: ProductInterface[] = [];
  constructor( public ProductsService : ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((data : any) => {
      const apiResult: ProductInterface[] = data.response;
      const formattedResult = apiResult.map(({id, name,price, description, stars, image}) => ({id, name,price, description, stars, image}));
      this.Products = formattedResult
      console.log(this.Products);
      
    })
  }

}
