// สร้างคลาส Product
export class Product {
    private id: string;
    private name: string;
    private brand: string;
    private price: number; // เพิ่มราคาสินค้า

    constructor(id: string, name: string, brand: string, price: number) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price; // กำหนดราคาสินค้าใน constructor
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getBrand(): string {
        return this.brand;
    }

    public getPrice(): number { // เพิ่มเมธอดนี้เพื่อดึงราคาสินค้า
        return this.price;
    }
}
