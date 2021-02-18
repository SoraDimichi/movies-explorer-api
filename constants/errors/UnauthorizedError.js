module.exports = class UnauthorizedError extends Error {
  constructor(message) {
    super();
    this.statusCode = 401;
    this.message = message;
  }
};
