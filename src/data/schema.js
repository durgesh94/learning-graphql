import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldOut: Boolean
        stores: [Store]!
    }

    type Store {
        store: String
    }

    type Query {
        product: Product
    }
`);

export default schema;