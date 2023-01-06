const httpStatus = require("http-status");
const AuthService = require("../services/AuthService");
const {
  hashToPassword,
  generateAccessToken,
  generateRefreshToken,
} = require("../script/utils/helper");

class AuthController {
  login(req, res) {
    req.body.password = hashToPassword(req.body.password);
    AuthService.findOne(req.body).then((user) => {
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ error: "Kullanıcı adı veya parola hatalı." });
      }

      user = {
        ...user.toObject(),
        tokens: {
          access_token: generateAccessToken(user),
          refresh_token: generateRefreshToken(user),
        },
      };

      delete user.password;

      return res.status(httpStatus.OK).send(user);
    });
  }

  register(req, res) {
    AuthService.findOne({
      user_name: req.body.user_name,
    }).then((name) => {
      if (!name) {
        return AuthService.findOne({ email: req.body.email }).then((mail) => {
          if (!mail) {
            req.body.password = hashToPassword(req.body.password);
            req.body.login_type = "user";
            return AuthService.create(req.body)
              .then((user) => res.status(httpStatus.OK).send(user))
              .catch((e) =>
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
              );
          }
          return res
            .status(httpStatus.BAD_REQUEST)
            .send({ error: "Bu mail zaten kullanılıyor." });
        });
      }
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ error: "Bu Kullanıcı adı zaten kullanılıyor." });
    });
  }
}

module.exports = new AuthController();
