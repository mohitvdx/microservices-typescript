import {Product} from "./Product"

class ProductStore {
    static instance: ProductStore|null = null;
    productStore:Product[] = []

    static getInstance() {
        if(!ProductStore.instance) {
            ProductStore.instance = new ProductStore()
        }
        return ProductStore.instance
    }

    push(p: Product) {
        this.productStore.push(p)
    }

    find(cb: (value: Product) => boolean): Product|undefined {
        return this.productStore.find(cb)
    }

    toString() {
        return JSON.stringify(this.productStore)
    }

}

export const productsStore:ProductStore = ProductStore.getInstance();