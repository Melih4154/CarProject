const httpStatus = require("http-status");
const StatusService = require("../services/Demage/StatusService");

class StatusController {
  create(req, res) {  
    StatusService.create(req.body)
      .then((status) => res.status(httpStatus.CREATED).send(status)
      )
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }
}

module.exports = new StatusController();
