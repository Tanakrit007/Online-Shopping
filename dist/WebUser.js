"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
class WebUser {
    constructor(login_id, password) {
        this.orders = []; // ฟิลด์ใหม่สำหรับเก็บคำสั่งซื้อ
        this.login_id = login_id;
        this.password = password;
    }
    getName() {
        return this.login_id; // หรือจะดึงชื่อผู้ใช้จากฟิลด์อื่นก็ได้
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrders() {
        return this.orders;
    }
}
exports.WebUser = WebUser;
