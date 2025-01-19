export class ShoppingCart {
    private created: Date;

    constructor() {
        this.created = new Date();
    }

    public getCreated(): Date {
        return this.created;
    }
}