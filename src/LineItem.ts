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

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getProduct(): Product {
        return this.product;
    }

    public setProduct(product: Product): void {
        this.product = product;
    }

    // เพิ่มฟังก์ชันสำหรับเพิ่มรายการสินค้าลงในตะกร้า
    public addItem(lineItem: LineItem): void {
        // เพิ่ม logic สำหรับการเพิ่ม item หากต้องการให้สินค้าที่เหมือนกันเพิ่มจำนวนขึ้น
        if (this.product.getId() === lineItem.getProduct().getId()) {
            this.quantity += lineItem.getQuantity(); // เพิ่มจำนวนสินค้าที่มีอยู่แล้ว
        }
    }
}
