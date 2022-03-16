export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public category: string,
        public price: number) { }
}

export type ProductSelection = {
    product: Product,
    quantity: number
}

export class OrderLine {
    constructor(public product: Product, public quantity: number) { }

    get total(): number {
        return this.product.price * this.quantity;
    }
}

export class Order {
    private lines: OrderLine[] = [];

    constructor(initialLines?: OrderLine[]) {
        if (initialLines) {
            this.lines.push(...initialLines);
        }
    }

    public addProduct(prod: Product, quantity: number) {
        const index = this.lines.findIndex(ol => ol.product.id === prod.id)
        if (index > -1) {
            if (quantity === 0) {
                this.removeProduct(prod.id);
            } else {
                this.lines[index].quantity += quantity;
            }
        } else {
            this.lines.push(new OrderLine(prod, quantity));
        }
    }

    public removeProduct(id: number) {
        this.lines = this.lines.filter(ol => ol.product.id !== id);
    }

    get orderLines(): OrderLine[] {
        return this.lines;
    }

    get productCount(): number {
        return this.lines.reduce((total, ol) => total += ol.quantity, 0);
    }

    get total(): number {
        return this.lines.reduce((total, ol) => total += ol.total, 0);
    }
}
