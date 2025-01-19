// Product.ts
export class Product {
    private id: string;
    private name: string;
    private supplier: string;

    constructor(id: string, name: string, supplier: string) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getSupplier(): string {
        return this.supplier;
    }

    toString(): string {
        return `Product [id=${this.id}, name=${this.name}, supplier=${this.supplier}]`;
    }
}
