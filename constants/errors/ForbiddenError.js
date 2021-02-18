module.exports = class ForbiddenError extends Error {
  constructor(message) {
    super();
    this.statusCode = 403;
    this.message = message;
  }
};
