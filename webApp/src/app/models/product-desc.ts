export class productDesc {
  id: number;
  price: number;
  picture: string;
  colour: string;
  size: string;
  name: string;

  constructor(
    id: number,
    price: number,
    picture: string,
    colour: string,
    size: string,
    name: string
  ) {
    this.id = id;
    this.price = price;
    this.picture = picture;
    this.colour = colour;
    this.size = size;
    this.name = name;
  }
}
