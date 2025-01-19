"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, billing_address) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = false;
        this.open = new Date();
        this.closed = null;
    }
    getId() {
        return this.id;
    }
    getBilling_address() {
        return this.billing_address;
    }
    setBilling_address(billing_address) {
        this.billing_address = billing_address;
    }
    getIs_closed() {
        return this.is_closed;
    }
    setIs_closed(is_closed) {
        this.is_closed = is_closed;
        if (is_closed) {
            this.closed = new Date();
        }
    }
    getOpen() {
        return this.open;
    }
    getClosed() {
        return this.closed;
    }
}
exports.Account = Account;
