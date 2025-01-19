import { WebUser } from "./WebUser";
import { Product } from "./Product";
import { LineItem } from "./LineItem";
import { Order } from "./Order";

// สร้างสินค้า
const product1 = new Product("001", "Pen", "Stationery Brand", 10);
const product2 = new Product("002", "Pencil", "Stationery Brand", 5);
const product3 = new Product("003", "Notebook", "Stationery Brand", 15);
const product4 = new Product("004", "Eraser", "Stationery Brand", 7);
const product5 = new Product("005", "Ruler", "Stationery Brand", 8);

// แสดงสินค้า
console.log("\n=== Available Products ===");
console.log(`ID: ${product1.getId()}, Name: ${product1.getName()}, Brand: ${product1.getBrand()}, Price: $${product1.getPrice()}`);
console.log(`ID: ${product2.getId()}, Name: ${product2.getName()}, Brand: ${product2.getBrand()}, Price: $${product2.getPrice()}`);
console.log(`ID: ${product3.getId()}, Name: ${product3.getName()}, Brand: ${product3.getBrand()}, Price: $${product3.getPrice()}`);
console.log(`ID: ${product4.getId()}, Name: ${product4.getName()}, Brand: ${product4.getBrand()}, Price: $${product4.getPrice()}`);
console.log(`ID: ${product5.getId()}, Name: ${product5.getName()}, Brand: ${product5.getBrand()}, Price: $${product5.getPrice()}`);

// สร้างผู้ใช้
const user1 = new WebUser("user1", "password1");
const user2 = new WebUser("user2", "password2");

// สร้างคำสั่งซื้อและตะกร้าสินค้า
const cart1 = new LineItem(1, 10, product1);
cart1.addItem(new LineItem(2, 5, product2)); // เพิ่มสินค้า
const order1 = new Order("ORD001", "2025-01-19", "2025-01-20", "123 Main St", [cart1]); // สร้างคำสั่งซื้อ
user1.addOrder(order1); // เพิ่มคำสั่งซื้อให้ user1

const cart2 = new LineItem(1, 15, product3);
cart2.addItem(new LineItem(2, 7, product4)); // เพิ่มสินค้า
const order2 = new Order("ORD002", "2025-01-19", "2025-01-20", "456 Main St", [cart2]); // สร้างคำสั่งซื้อ
user2.addOrder(order2); // เพิ่มคำสั่งซื้อให้ user2

// แสดงรายละเอียดของคำสั่งซื้อของ user1
console.log("\n=== User1 Order Details ===");
console.log("User: " + user1.getName()); // แสดงชื่อผู้ใช้
console.log("Order Number: " + order1.getNumber()); // แสดงหมายเลขคำสั่งซื้อ
console.log("Shipping Address: " + order1.getShipTo()); // แสดงที่อยู่จัดส่ง
console.log("Total Price: " + order1.calculateTotal()); // แสดงราคาสุทธิจากคำสั่งซื้อ
console.log("Line Items: ", order1.getLineItems()); // แสดงรายการสินค้าที่อยู่ในคำสั่งซื้อ

// แสดงรายละเอียดของคำสั่งซื้อของ user2
console.log("\n=== User2 Order Details ===");
console.log("User: " + user2.getName()); // แสดงชื่อผู้ใช้
console.log("Order Number: " + order2.getNumber()); // แสดงหมายเลขคำสั่งซื้อ
console.log("Shipping Address: " + order2.getShipTo()); // แสดงที่อยู่จัดส่ง
console.log("Total Price: " + order2.calculateTotal()); // แสดงราคาสุทธิจากคำสั่งซื้อ
console.log("Line Items: ", order2.getLineItems()); // แสดงรายการสินค้าที่อยู่ในคำสั่งซื้อ
