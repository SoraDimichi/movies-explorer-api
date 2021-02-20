module.exports = class BadRequestError extends Error {
  constructor(message) {
    super();
    this.statusCode = 400;
    this.message = message;
  }
};
