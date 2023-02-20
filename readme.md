#### Optic Store GraphQL
# This is a GraphQL API for an online store that allows you to retrieve, create, update, and delete products.

### Getting Started
# To get started with this API, you will need to have a GraphQL client installed, such as GraphiQL or Apollo Client.

### API Endpoints
# The following endpoints are available:

1. getProducts
Retrieves all products in the store.

- Input
This endpoint takes no input.

- Output
Returns an array of all products in the store.

2. getProductById
Retrieves a product by its ID.

- Input
id (string): The ID of the product to retrieve.
- Output
Returns the product with the specified ID.

3. getProductsByCategory
Retrieves all products in a specified category.

- Input
category (string): The category to filter by.
- Output
Returns an array of all products in the specified category.

4. saveProduct
Adds a new product to the store.

- Input
title (string): The name of the product.
category (string): The category of the product.
description (string): A description of the product.
price (float): The price of the product.
thumbnail (string): the thumbnail of the product.
- Output
Returns the newly created product.

5. updateProduct
Updates an existing product in the store.

- Input
id (string): The ID of the product to update.
title (string): The name of the product.
category (string): The category of the product.
description (string): A description of the product.
price (float): The price of the product.
thumbnail (string): the thumbnail of the product.
- Output
Returns the updated product.

6. deleteProduct
Removes a product from the store.

- Input
id (string): The ID of the product to remove.
- Output
Returns a boolean indicating whether the product was successfully removed.

Running the API
To run the API, you will need to have Node.js installed on your system. Once you have Node.js installed, follow these steps:

Clone this repository to your local machine.
Install the dependencies by running npm install.
Start the server by running npm start.
Once the server is running, you can access the GraphQL API at http://localhost:4000/graphql. From there, you can use a GraphQL client to send queries and mutations to the API.

Conclusion
This GraphQL API provides basic functionality for managing products in an online store. With the available endpoints, you can retrieve all products, retrieve a specific product by ID, retrieve all products in a specific category, create a new product, update an existing product, and remove a product from the store.