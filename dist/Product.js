"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// สร้างคลาส Product
class Product {
    constructor(id, name, brand, price) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price; // กำหนดราคาสินค้าใน constructor
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBrand() {
        return this.brand;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
