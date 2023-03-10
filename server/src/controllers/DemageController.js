const httpStatus = require("http-status");
const DemageService = require("../services/Demage/DemageService");

class DemageController {
  create(req, res) {

    DemageService.getAll().then(
      (demages) => {
        req.body.file_number = demages.length < 1 ? 1 : demages.at(-1).file_number + 1;
        DemageService.create(req.body)
          .then((demage) => res.status(httpStatus.CREATED).send(demage))
          .catch((e) =>
            res
              .status(httpStatus.INTERNAL_SERVER_ERROR)
              .send({ error: "Bir hata oluştu." })
          );
      }
    )


  }

  getAll(req, res) {
    DemageService.getAll()
      .then((demages) => {
        res.status(httpStatus.OK).send(demages);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }

  getByDemageId(req, res) {
    DemageService.findOne({ _id: req.params.demage_id })
      .then((demage) => {

        res.status(httpStatus.OK).send(demage);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }
}

module.exports = new DemageController();
