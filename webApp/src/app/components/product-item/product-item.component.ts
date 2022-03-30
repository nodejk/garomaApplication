import { Component, OnInit, Input } from '@angular/core';
import { productDesc } from 'src/app/models/product-desc';
import { CartManagementService } from 'src/app/services/cart-management.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: productDesc;

  constructor(private cartService: CartManagementService) {}

  ngOnInit(): void {}

  handlerAddToCart() {
    this.cartService.addToCart(this.productItem);
  }
}
