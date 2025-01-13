import { WebUser } from "./WebUser";
//import { UserState } from "./UserState";
import { Customer } from "./customer";
import { Product } from './Product';
import { Order } from "./Order";
import { LineItem } from './Lineitem';

console.log(
    "############# User #############"
)
const User1 = new WebUser(
    `001`,`123400`
)
console.log(User1.toString());

console.log(
    "############# Customer #############"
)
const Customer1 = new Customer(
    `001`,`Nakon`,`087777777`,`ihum@mail.com`,User1
)
console.log(Customer1.toString());

console.log(
    "############# Product #############"
)
const product1 = new Product(
    `001`,`lay`,`Ex`
)
console.log(product1.toString());

console.log(
    "############# LineItem #############"
)
const linettem1 = new LineItem(
    50,100,product1
)
console.log(linettem1.toString());
