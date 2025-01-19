"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to, lineItems) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus.NEW;
        this.lineItems = lineItems;
    }
    // ฟังก์ชันสำหรับดึงข้อมูลหมายเลขคำสั่งซื้อ
    getNumber() {
        return this.number;
    }
    // ฟังก์ชันสำหรับดึงข้อมูลที่อยู่จัดส่ง
    getShipTo() {
        return this.ship_to;
    }
    // ฟังก์ชันสำหรับคำนวณราคารวมของคำสั่งซื้อ
    calculateTotal() {
        let totalPrice = 0;
        for (let item of this.lineItems) {
            totalPrice += item.getPrice() * item.getQuantity();
        }
        return totalPrice;
    }
    // ฟังก์ชันสำหรับดึงรายการสินค้าในคำสั่งซื้อ
    getLineItems() {
        return this.lineItems;
    }
    // ฟังก์ชันที่ใช้แสดงข้อมูลทั้งหมดของคำสั่งซื้อ
    toString() {
        return `Order [Number = ${this.number}], [Ordered = ${this.ordered}], [Shipped = ${this.shipped}], [ShipTo = ${this.ship_to}], [Status = ${this.status}], [Total = ${this.calculateTotal()}]`;
    }
}
exports.Order = Order;
