const { CustomAPIError } = require("../error/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.staus(err.statusCode).json({ msg: err.message });
  }
  return res.status(err.status).json({ msg: err.msg });
};

module.exports = errorHandlerMiddleware;
