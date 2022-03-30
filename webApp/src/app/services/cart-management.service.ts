import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { productDesc } from '../models/product-desc';
import { CartItem } from '../models/cart-items';

@Injectable({
  providedIn: 'root',
})
export class CartManagementService {
  private cartItems: CartItem[] = [];
  private cartVisibility: boolean = false;

  private subjectCart = new BehaviorSubject<CartItem[]>(this.cartItems);
  private subjectVisibility = new BehaviorSubject<boolean>(this.cartVisibility);

  private cartCacheKey: string = 'cart-items';
  private cartVisibilityCacheKey: string = 'visibility';

  constructor() {
    const cartData = sessionStorage.getItem(this.cartCacheKey);

    if (cartData) {
      this.cartItems = <CartItem[]>JSON.parse(cartData);
      this.subjectCart.next(this.cartItems);
    }

    const cartVisibilityData = sessionStorage.getItem(
      this.cartVisibilityCacheKey
    );

    if (cartVisibilityData) {
      this.cartVisibility = <boolean>JSON.parse(cartVisibilityData);
      this.subjectVisibility.next(this.cartVisibility);
    }
  }

  addToCart(productItem: productDesc) {
    /*
    check if the item already exists in the cart. 
    */
    const found = this.cartItems.some((el) => el.id === productItem.id);
    if (found) {
      // find the index of the item and increment the quantity.
      const index = this.cartItems.findIndex((object) => {
        return object.id === productItem.id;
      });

      const tempObj = this.cartItems[index];
      tempObj.quantity = tempObj.quantity + 1;
      this.cartItems[index] = tempObj;
    } else {
      // append a new item to the cart.
      const addCartItem = {
        id: productItem.id,
        quantity: 1,
        name: productItem.name,
        price: productItem.price,
        picture: productItem.picture,
      };

      this.cartItems.push(addCartItem);
    }
    this.setCartItemsCache();
    this.subjectCart.next(this.cartItems);
  }

  getCartItems() {
    return this.subjectCart.asObservable();
  }

  toggleCartVisibilityOn() {
    this.setCartVisibilityCache(true);
    this.subjectVisibility.next(true);
  }

  toggleCartVisibilityOff() {
    this.setCartVisibilityCache(false);
    this.subjectVisibility.next(false);
  }

  decreaseProductQuantity(cartItem: CartItem) {
    // decrease the product quantity by 1.
    const index = this.cartItems.findIndex((object) => {
      return object.id === cartItem.id;
    });

    const tempObj = this.cartItems[index];

    if (tempObj.quantity === 1) {
      this.cartItems.splice(index, 1);
    } else {
      tempObj.quantity = tempObj.quantity - 1;
      this.cartItems[index] = tempObj;
    }
    this.setCartItemsCache();
    this.subjectCart.next(this.cartItems);
  }

  increaseProductQuantity(cartItem: CartItem) {
    // increase the product quantity by 1.
    const index = this.cartItems.findIndex((object) => {
      return object.id === cartItem.id;
    });

    const tempObj = this.cartItems[index];

    tempObj.quantity = tempObj.quantity + 1;
    this.cartItems[index] = tempObj;

    this.setCartItemsCache();
    this.subjectCart.next(this.cartItems);
  }

  deleteProduct(cartItem: CartItem) {
    // remove the product from the cart.
    const index = this.cartItems.findIndex((object) => {
      return object.id === cartItem.id;
    });

    this.cartItems.splice(index, 1);
    this.setCartItemsCache();
    this.subjectCart.next(this.cartItems);
  }

  getCartVisibility() {
    return this.subjectVisibility.asObservable();
  }

  setCartItemsCache() {
    sessionStorage.setItem(this.cartCacheKey, JSON.stringify(this.cartItems));
  }

  setCartVisibilityCache(value: boolean) {
    sessionStorage.setItem(this.cartVisibilityCacheKey, JSON.stringify(value));
  }
}
