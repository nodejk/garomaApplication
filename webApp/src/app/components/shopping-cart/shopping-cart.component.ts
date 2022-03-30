import { Component, OnInit } from '@angular/core';
import { productDesc } from 'src/app/models/product-desc';
import { CartManagementService } from 'src/app/services/cart-management.service';
import { CartItem } from 'src/app/models/cart-items';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartTotal = 0;
  showCartModal = false;
  cartPopUp: Modal | undefined;
  display: string = 'none';
  constructor(private managementService: CartManagementService) {}

  ngOnInit() {
    this.managementService.getCartItems().subscribe((x: CartItem[]) => {
      this.cartItems = x;

      let cartTotalPrice = 0;
      x.forEach(
        (element) => (cartTotalPrice += element.price * element.quantity)
      );
      this.cartTotal = cartTotalPrice;
    });

    this.managementService.getCartVisibility().subscribe((x: boolean) => {
      this.showCartModal = x;
      this.display = this.showCartModal === true ? 'block' : 'none';
    });
  }

  onCloseHandler() {
    this.managementService.toggleCartVisibilityOff();
  }
}
