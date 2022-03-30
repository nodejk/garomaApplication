import { Component, OnInit, Input } from '@angular/core';
import { CartManagementService } from 'src/app/services/cart-management.service';
import { CartItem } from 'src/app/models/cart-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() totalItems = 0;
  constructor(private cartService: CartManagementService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((x: CartItem[]) => {
      let totalItemsCart = 0;
      x.forEach((element) => (totalItemsCart += element.quantity));
      this.totalItems = totalItemsCart;
    });
  }

  toggleCartVisibilityOn(): void {
    this.cartService.toggleCartVisibilityOn();
  }
}
