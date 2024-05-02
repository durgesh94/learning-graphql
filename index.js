import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from "ruru/server"
import schema from './src/data/schema.js';
import resolvers from './src/data/resolvers.js';

const PORT = 8080;

var app = express();

const root = resolvers;

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