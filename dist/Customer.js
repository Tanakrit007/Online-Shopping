"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, name, phone, email, webUser) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.webUser = webUser;
    }
    toString() {
        return `Customer [id=${this.id}, name=${this.name}, phone=${this.phone}, email=${this.email}]`;
    }
}
exports.Customer = Customer;
