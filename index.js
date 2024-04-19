import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from "ruru/server"
import schema from './src/data/schema.js';

const PORT = 8080;

// The root provides a resolver function for each API endpoint
var root = {
    product: () => {
        return {
            "id": 1,
            "name": "iPhone 15",
            "description": "Test",
            "price": 75000,
            "soldOut": false
        }
    }
};

var app = express()

// Create and use the GraphQL handler.
app.all("/graphql", createHandler({
    schema: schema,
    rootValue: root,
}));

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`));