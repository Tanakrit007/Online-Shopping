"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
// WebUser.ts
class WebUser {
    constructor(login_id, password, id, address, phone, email) {
        this.login_id = login_id;
        this.password = password;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getLogin_id() {
        return this.login_id;
    }
    getState() {
        return "Active"; // ตัวอย่าง: ค่า state เริ่มต้น
    }
    getId() {
        return this.id || "N/A";
    }
    getAddress() {
        return this.address || "N/A";
    }
    getPhone() {
        return this.phone || "N/A";
    }
    getEmail() {
        return this.email || "N/A";
    }
    toString() {
        return `WebUser [login_id=${this.login_id}, id=${this.id}, email=${this.email}]`;
    }
}
exports.WebUser = WebUser;
