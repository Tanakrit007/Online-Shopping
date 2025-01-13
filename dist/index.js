"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebUser_1 = require("./WebUser");
//import { UserState } from "./UserState";
const customer_1 = require("./customer");
const Product_1 = require("./Product");
const Lineitem_1 = require("./Lineitem");
console.log("############# User #############");
const User1 = new WebUser_1.WebUser(`001`, `123400`);
console.log(User1.toString());
console.log("############# Customer #############");
const Customer1 = new customer_1.Customer(`001`, `Nakon`, `087777777`, `ihum@mail.com`, User1);
console.log(Customer1.toString());
console.log("############# Product #############");
const product1 = new Product_1.Product(`001`, `lay`, `Ex`);
console.log(product1.toString());
console.log("############# LineItem #############");
const linettem1 = new Lineitem_1.LineItem(50, 100, product1);
console.log(linettem1.toString());
