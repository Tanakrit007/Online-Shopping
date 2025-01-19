"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    // เพิ่มฟังก์ชันสำหรับเพิ่มรายการสินค้าลงในตะกร้า
    addItem(lineItem) {
        // เพิ่ม logic สำหรับการเพิ่ม item หากต้องการให้สินค้าที่เหมือนกันเพิ่มจำนวนขึ้น
        if (this.product.getId() === lineItem.getProduct().getId()) {
            this.quantity += lineItem.getQuantity(); // เพิ่มจำนวนสินค้าที่มีอยู่แล้ว
        }
    }
}
exports.LineItem = LineItem;
