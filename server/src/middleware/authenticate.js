const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1] || null;

  if (token == null) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "Bu işlem için giriş yapmalısınız..." });
  }

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(httpStatus.FORBIDDEN).send(err);
    }

    req.user = user?._doc;
    next();
  });
};

// isAdmin = (req, res, next) => {
//   if (req.user?.__t === "admin") {
//     next();
//     return;
//   }
//   res.status(httpStatus.UNAUTHORIZED).send({ error: "Yetkisiz İşlem" });
// };

isCompany = (req, res, next) => {
  if (req.user?.__t === "company") {
    next();
    return;
  }
  res.status(httpStatus.UNAUTHORIZED).send({ error: "Yetkisiz İşlem" });
};

isUser = (req, res, next) => {
  if (req.user?.__t === "individual") {
    next();
    return;
  }
  res.status(httpStatus.UNAUTHORIZED).send({ error: "Yetkisiz İşlem" });
};

const authJwt = {
  authenticateToken,
  //isAdmin,
  isCompany,
  isUser,
};
module.exports = authJwt;
