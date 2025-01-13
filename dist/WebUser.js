"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    constructor(login_id, password) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState_1.UserState.NEW;
    }
    getLoginId() {
        return this.login_id;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    toString() {
        return `Login ID: ${this.login_id}, Password: ${this.password}, State: ${this.state}`;
    }
}
exports.WebUser = WebUser;
