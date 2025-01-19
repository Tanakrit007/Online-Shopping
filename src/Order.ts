// Order.ts
import { LineItem } from './LineItem';
import { OrderStatus } from './OrderStatus';

export class Order {
    private number: string;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: OrderStatus;
    private lineItems: LineItem[];

    constructor(number: string, ordered: string, shipped: string, ship_to: string, lineItems: LineItem[]) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus.NEW;
        this.lineItems = lineItems;
    }

    // ฟังก์ชันสำหรับดึงข้อมูลหมายเลขคำสั่งซื้อ
    public getNumber(): string {
        return this.number;
    }

    // ฟังก์ชันสำหรับดึงข้อมูลที่อยู่จัดส่ง
    public getShipTo(): string {
        return this.ship_to;
    }

    // ฟังก์ชันสำหรับคำนวณราคารวมของคำสั่งซื้อ
    public calculateTotal(): number {
        let totalPrice = 0;
        for (let item of this.lineItems) {
            totalPrice += item.getPrice() * item.getQuantity();
        }
        return totalPrice;
    }

    // ฟังก์ชันสำหรับดึงรายการสินค้าในคำสั่งซื้อ
    public getLineItems(): LineItem[] {
        return this.lineItems;
    }

    // ฟังก์ชันที่ใช้แสดงข้อมูลทั้งหมดของคำสั่งซื้อ
    public toString(): string {
        return `Order [Number = ${this.number}], [Ordered = ${this.ordered}], [Shipped = ${this.shipped}], [ShipTo = ${this.ship_to}], [Status = ${this.status}], [Total = ${this.calculateTotal()}]`;
    }
}
