"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, address, phone, email, webUser) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.webUser = webUser;
    }
    getID() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Customer [ID = ${this.id}],[Address = ${this.address}],[Phone = ${this.phone}],[Email = ${this.email}]`;
    }
}
exports.Customer = Customer;
