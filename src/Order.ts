import { OrderStatus } from './OrderStatus';
import { LineItem } from './LineItem';

export class Order {
    private number: string;
    private ordered: Date;
    private shipped: Date | null;
    private ship_to: string;
    private status: OrderStatus;
    private total: number;
    private lineItems: LineItem[] = [];

    constructor(number: string, ship_to: string, total: number) {
        this.number = number;
        this.ordered = new Date();
        this.shipped = null;
        this.ship_to = ship_to;
        this.status = OrderStatus.NEW;
        this.total = total;
    }

    public getNumber(): string {
        return this.number;
    }

    public getOrdered(): Date {
        return this.ordered;
    }

    public getShipped(): Date | null {
        return this.shipped;
    }

    public setShipped(shipped: Date): void {
        this.shipped = shipped;
    }

    public getShip_to(): string {
        return this.ship_to;
    }

    public setShip_to(ship_to: string): void {
        this.ship_to = ship_to;
    }

    public getStatus(): OrderStatus {
        return this.status;
    }

    public setStatus(status: OrderStatus): void {
        this.status = status;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public getLineItems(): LineItem[] {
        return this.lineItems;
    }

    public addLineItem(lineItem: LineItem): void {
        this.lineItems.push(lineItem);
    }
}