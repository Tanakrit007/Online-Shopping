"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ship_to, total) {
        this.lineItems = [];
        this.number = number;
        this.ordered = new Date();
        this.shipped = null;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus.NEW;
        this.total = total;
    }
    getNumber() {
        return this.number;
    }
    getOrdered() {
        return this.ordered;
    }
    getShipped() {
        return this.shipped;
    }
    setShipped(shipped) {
        this.shipped = shipped;
    }
    getShip_to() {
        return this.ship_to;
    }
    setShip_to(ship_to) {
        this.ship_to = ship_to;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getLineItems() {
        return this.lineItems;
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
    }
}
exports.Order = Order;
