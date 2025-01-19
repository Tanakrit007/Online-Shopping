export class Account {
    private id: string;
    private billing_address: string;
    private is_closed: boolean;
    private open: Date;
    private closed: Date | null;    // Make closed nullable

    constructor(id: string, billing_address: string) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = false;
        this.open = new Date();
        this.closed = null;
    }

    public getId(): string {
        return this.id;
    }

    public getBilling_address(): string {
        return this.billing_address;
    }

    public setBilling_address(billing_address: string): void {
        this.billing_address = billing_address;
    }

    public getIs_closed(): boolean {
        return this.is_closed;
    }

    public setIs_closed(is_closed: boolean): void {
        this.is_closed = is_closed;
        if (is_closed) {
            this.closed = new Date();
        }
    }

    public getOpen(): Date {
        return this.open;
    }

    public getClosed(): Date | null {    // Update return type
        return this.closed;
    }
}