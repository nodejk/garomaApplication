export class CartItem {
  id: number;
  quantity: number;
  name: string;
  picture: string;
  price: number;

  constructor(
    id: number,
    quantity: number,
    productName: string,
    picture: string,
    price: number
  ) {
    this.id = id;
    this.quantity = quantity;
    this.name = productName;
    this.picture = picture;
    this.price = price;
  }
}
