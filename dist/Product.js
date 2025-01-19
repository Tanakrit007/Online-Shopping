"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Product.ts
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSupplier() {
        return this.supplier;
    }
    toString() {
        return `Product [id=${this.id}, name=${this.name}, supplier=${this.supplier}]`;
    }
}
exports.Product = Product;
