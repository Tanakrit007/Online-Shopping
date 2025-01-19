// LineItem.ts
import { Product } from "./Product";

export class LineItem {
    private quantity: number;
    private price: number;
    private product: Product;

    constructor(quantity: number, price: number, product: Product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }

    toString(): string {
        return `LineItem [quantity=${this.quantity}, price=${this.price}, product=${this.product.toString()}]`;
    }
}
