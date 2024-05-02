
import { nanoid } from "nanoid";

class Product {
    constructor(id, { name, description, price, soldOut, qty, stores }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldOut = soldOut;
        this.qty = qty;
        this.stores = stores;
    }
}

const productDatabase = {};

const resolvers = {
    getProduct: ({ id }) => {
        return new Product(id, productDatabase[id]);
    },
    createProduct: ({ input }) => {
        let id = nanoid();
        productDatabase[id] = input;
        return new Product(id, input);
    }
}

export default resolvers;