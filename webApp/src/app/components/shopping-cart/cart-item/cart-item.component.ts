import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-items';
import { CartManagementService } from 'src/app/services/cart-management.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  constructor(private cartManagementService: CartManagementService) {}

  ngOnInit(): void {}

  decrementQuantity() {
    this.cartManagementService.decreaseProductQuantity(this.cartItem);
  }

  incrementQuantity() {
    this.cartManagementService.increaseProductQuantity(this.cartItem);
  }

  deleteItem() {
    this.cartManagementService.deleteProduct(this.cartItem);
  }
}
