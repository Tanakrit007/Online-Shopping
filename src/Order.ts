import { OrderStatus } from './OrderStatus';
import { LineItem } from './Lineitem';

export class Order {
    private number: string;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: OrderStatus;
    private lineItems: LineItem[] = [];

    constructor(number: string, ordered: string, shipped: string, ship_to: string, lineItems: LineItem[] = []) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus.NEW;
        this.lineItems = lineItems;
    }

    public calculateTotal(): number {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            totalPrice += this.lineItems[i].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }

    public getNumber(): string {
        return this.number;
    }

    public getOrdered(): string {
        return this.ordered;
    }

    public setOrdered(ordered: string): void {
        this.ordered = ordered;
    }

    public getShipped(): string {
        return this.shipped;
    }

    public setShipped(shipped: string): void {
        this.shipped = shipped;
    }

    public getShipTo(): string {
        return this.ship_to;
    }

    public setShipTo(ship_to: string): void {
        this.ship_to = ship_to;
    }

    public getStatus(): OrderStatus {
        return this.status;
    }

    public setStatus(status: OrderStatus): void {
        this.status = status;
    }

    public getLineItems(): LineItem[] {
        return this.lineItems;
    }

    public addLineItem(lineItem: LineItem): void {
        this.lineItems.push(lineItem);
    }

    public toString(): string {
        return `Order [Number = ${this.number}], [Ordered = ${this.ordered}], [Shipped = ${this.shipped}], [ShipTo = ${this.ship_to}], [Status = ${this.status}], [Total = ${this.calculateTotal()}]`;
    }
}
