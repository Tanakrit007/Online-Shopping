import { WebUser } from "./WebUser";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { LineItem } from "./LineItem";

console.log("############# User #############");
const user1 = new WebUser("001", "123400");
console.log(user1.toString());

console.log("############# Customer #############");
const customer1 = new Customer("001", "Nakon", "087777777", "ihum@mail.com", user1);
console.log(customer1.toString());

console.log("############# Product #############");
const product0 = new Product("001", "Lay", "Ex");
console.log(product0.toString());

console.log("############# LineItem #############");
const lineItem1 = new LineItem(50, 100, product0);
console.log(lineItem1.toString());

console.log("############# Account #############");
const accountUser = new WebUser(
    "ART_DOE",
    "password123",
    //"user1",
    //"1/26 Nakonpatom",
    //"+1234567890",
    //"art@email.com"
);

const product1 = new Product("PROD001", "Laptop", "Dell");
const product2 = new Product("PROD002", "Phone", "ROG");
const product3 = new Product("PROD003", "Laptop", "Dell");
const product4 = new Product("PROD004", "Phone", "ROG");
const product5 = new Product("PROD005", "Laptop", "Dell");


console.log("\n=== User Information ===");
console.log("State:", accountUser.getState());

console.log("\n=== Product List ===");
console.log("Product 1:");
console.log("  - ID:", product1.getId());
console.log("  - Name:", product1.getName());
console.log("  - Supplier:", product1.getSupplier());

console.log("\nProduct 2:");
console.log("  - ID:", product2.getId());
console.log("  - Name:", product2.getName());
console.log("  - Supplier:", product2.getSupplier());
console.log();

console.log("Product 3:");
console.log("  - ID:", product3.getId());
console.log("  - Name:", product3.getName());
console.log("  - Supplier:", product3.getSupplier());

console.log("\nProduct 4:");
console.log("  - ID:", product4.getId());
console.log("  - Name:", product4.getName());
console.log("  - Supplier:", product4.getSupplier());
console.log();

console.log("Product 5:");
console.log("  - ID:", product5.getId());
console.log("  - Name:", product5.getName());
console.log("  - Supplier:", product5.getSupplier());
