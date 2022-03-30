import { Component, OnInit } from '@angular/core';
import { productDesc } from 'src/app/models/product-desc';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productService: ProductListService;
  productList: productDesc[];

  constructor(productService: ProductListService) {
    this.productService = productService;
    this.productList = [];
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((products: productDesc[]) => {
      this.productList = products;
    });
  }
}
