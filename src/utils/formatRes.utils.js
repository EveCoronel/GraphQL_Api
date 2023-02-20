class HttpError {
  constructor(status, message, details) {
    this.statusCode = status;
    this.message = message;
    this.data = details;
  }
}

const successResponse = (data, statusCode = 200) => {
  return {
    success: true,
    statusCode,
    data,
  };
};

const errorResponse = (error, statusCode = 200) => {
  return {
    success: false,
    statusCode,
    data: error,
  };
};

module.exports = {
  successResponse,
  errorResponse,
  HttpError,
};
