module.exports = class ConflictError extends Error {
  constructor(message) {
    super();
    this.statusCode = 409;
    this.message = message;
  }
};
