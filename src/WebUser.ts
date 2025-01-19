import { Order } from "./Order";
export class WebUser {
    private login_id: string;
    private password: string;
    private orders: Order[] = []; // ฟิลด์ใหม่สำหรับเก็บคำสั่งซื้อ

    constructor(login_id: string, password: string) {
        this.login_id = login_id;
        this.password = password;
    }

    public getName(): string {
        return this.login_id; // หรือจะดึงชื่อผู้ใช้จากฟิลด์อื่นก็ได้
    }

    public addOrder(order: Order): void {
        this.orders.push(order);
    }

    public getOrders(): Order[] {
        return this.orders;
    }
}
