const ApiError = require("../error/ApiError");

const idChecker = (field) => (req, res, next) => {
  if (!req.params[field || "id"].match(/^[0-9a-fA-F]{24}$/)) {
    next(new ApiError("Id bilgisi hatalı", 400));
    return;
  }
  next();
};

module.exports = idChecker;
