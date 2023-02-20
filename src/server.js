const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routers/app.routers");
const errorMiddleware = require("./middlewares/error.middleware");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const productsController = require("./controllers/products.controller");
const schema = require("./models/graphql/products.schema.graphql");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* app.use("/api", apiRoutes); */

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: productsController,
    graphiql: true,
  })
);

app.use(errorMiddleware);

module.exports = app;
