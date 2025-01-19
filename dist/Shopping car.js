"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this.created = new Date();
    }
    getCreated() {
        return this.created;
    }
}
exports.ShoppingCart = ShoppingCart;
