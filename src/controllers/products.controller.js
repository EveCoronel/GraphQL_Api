const ProductsApi = require("../api/products.api");
const { HTTP_STATUS } = require("../constants/api.constants");
const {
  successResponse,
  HttpError,
  errorResponse,
} = require("../utils/formatRes.utils");

const api = new ProductsApi();

class ProductsController {
  async getProducts() {
    try {
      const products = await api.getProducts();
      const response = successResponse(products);
      return response;
    } catch (error) {
      const errResponse = errorResponse(error, HTTP_STATUS.INTERNAL_ERROR);
      return errResponse;
    }
  }

  async getProductById(_id) {
    if (!_id) {
      const errResponse = errorResponse(
        "Id must be provided it",
        HTTP_STATUS.BAD_REQUEST
      );
      return errResponse;
    }
    try {
      const product = await api.getProductById(_id);
      const response = successResponse(product);
      return response;
    } catch (error) {
      const errResponse = errorResponse(error, HTTP_STATUS.INTERNAL_ERROR);
      return errResponse;
    }
  }

  async saveProduct({data: productPayload}) {
    try {
      const newproduct = await api.createProduct(productPayload);
      const response = successResponse(newproduct);
      return response
    } catch (error) {
      const errResponse = errorResponse(error, HTTP_STATUS.INTERNAL_ERROR);
      return errResponse;
    }
  }

  async updateProduct({_id, data: productPayload}) {
    if (!_id) {
      const errResponse = errorResponse(
        "Id must be provided it",
        HTTP_STATUS.BAD_REQUEST
      );
      return errResponse;
    }
    try {
      const updateproduct = await api.updateProduct(_id, productPayload);
      const response = successResponse(updateproduct);
      return response;
    } catch (error) {
      const errResponse = errorResponse(error, HTTP_STATUS.INTERNAL_ERROR);
      return errResponse;
    }
  }

  async deleteProduct(_id) {
    if (!_id) {
      const errResponse = errorResponse(
        "Id must be provided it",
        HTTP_STATUS.BAD_REQUEST
      );
      return errResponse;
    }
    try {
      const deletedproduct = await api.deleteProduct(_id);
      const response = successResponse(deletedproduct);
      return response;
    } catch (error) {
      const errResponse = errorResponse(error, HTTP_STATUS.INTERNAL_ERROR);
      return errResponse;
    }
  }

  async getProductsByCategory(payload) {
    const category = payload.category;
    if (!category) {
      return errorResponse(
        "Category must be provided it",
        HTTP_STATUS.BAD_REQUEST
      );
    }
    try {
      const products = await api.getProducts(category);
      const response = successResponse(products);
      return response;
    } catch (error) {
      const errResponse = errorResponse(error, HTTP_STATUS.INTERNAL_ERROR);
      return errResponse;
    }
  }
}

module.exports = new ProductsController();
