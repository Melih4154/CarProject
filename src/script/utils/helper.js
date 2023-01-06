const CRYPTOJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const hashToPassword = (password) => {
  return CRYPTOJS.HmacSHA256(
    password,
    CRYPTOJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
  ).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign(
    { name: user.email, ...user },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: "1w" }
  );
};

const generateRefreshToken = (user) => {
  return JWT.sign(
    { name: user.email, ...user },
    process.env.REFRESH_TOKEN_SECRET_KEY
  );
};

module.exports = {
  hashToPassword,
  generateAccessToken,
  generateRefreshToken,
};
