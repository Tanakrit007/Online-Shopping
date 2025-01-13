"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to, lineItems = []) {
        this.lineItems = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus.NEW;
        this.lineItems = lineItems;
    }
    calculateTotal() {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            totalPrice += this.lineItems[i].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }
    getNumber() {
        return this.number;
    }
    getOrdered() {
        return this.ordered;
    }
    setOrdered(ordered) {
        this.ordered = ordered;
    }
    getShipped() {
        return this.shipped;
    }
    setShipped(shipped) {
        this.shipped = shipped;
    }
    getShipTo() {
        return this.ship_to;
    }
    setShipTo(ship_to) {
        this.ship_to = ship_to;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getLineItems() {
        return this.lineItems;
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
    }
    toString() {
        return `Order [Number = ${this.number}], [Ordered = ${this.ordered}], [Shipped = ${this.shipped}], [ShipTo = ${this.ship_to}], [Status = ${this.status}], [Total = ${this.calculateTotal()}]`;
    }
}
exports.Order = Order;
