module.exports = class TooManyRequestsError extends Error {
  constructor(message) {
    super();
    this.statusCode = 429;
    this.message = message;
  }
};
