"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    toString() {
        return `LineItem [quantity=${this.quantity}, price=${this.price}, product=${this.product.toString()}]`;
    }
}
exports.LineItem = LineItem;
