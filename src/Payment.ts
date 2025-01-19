export class Payment {
    private id: string;
    private paid: Date;
    private total: number;
    private details: string;

    constructor(id: string, total: number, details: string) {
        this.id = id;
        this.paid = new Date();
        this.total = total;
        this.details = details;
    }

    public getId(): string {
        return this.id;
    }

    public getPaid(): Date {
        return this.paid;
    }

    public getTotal(): number {
        return this.total;
    }

    public getDetails(): string {
        return this.details;
    }

    public setDetails(details: string): void {
        this.details = details;
    }
}