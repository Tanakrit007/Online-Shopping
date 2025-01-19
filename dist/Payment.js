"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, total, details) {
        this.id = id;
        this.paid = new Date();
        this.total = total;
        this.details = details;
    }
    getId() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    getTotal() {
        return this.total;
    }
    getDetails() {
        return this.details;
    }
    setDetails(details) {
        this.details = details;
    }
}
exports.Payment = Payment;
