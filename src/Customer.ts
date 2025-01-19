// Customer.ts
import { WebUser } from "./WebUser";

export class Customer {
    private id: string;
    private name: string;
    private phone: string;
    private email: string;
    private webUser: WebUser;

    constructor(id: string, name: string, phone: string, email: string, webUser: WebUser) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.webUser = webUser;
    }

    toString(): string {
        return `Customer [id=${this.id}, name=${this.name}, phone=${this.phone}, email=${this.email}]`;
    }
}
