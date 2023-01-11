const httpStatus = require("http-status");
const OfferService = require("../services/OfferService");

class OfferController {
  create(req, res) {
    req.body.user_id = req.user;
    req.body.demand_id = req.params.demand_id;
    OfferService.create(req.body)
      .then((offer) => res.status(httpStatus.CREATED).send(offer))
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }

  getOfferByUser(req, res) {
    OfferService.getAll({ user_id: req.user?._id })
      .then((offers) => {
        res.status(httpStatus.OK).send(offers);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }

  getOfferByDemand(req, res) {
    OfferService.getAll({ demand_id: req.params.demand_id })
      .then((offers) => {
        res.status(httpStatus.OK).send(offers);
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu." })
      );
  }

  makeComment(req, res) {
    OfferService.findOne({ _id: req.params.offer_id })
      .then((offer) => {
        const comment = {
          ...req.body,
          created_at: new Date(),
          user_id: req.user,
        };

        offer.comments.push(comment);
        offer
          .save()
          .then((offer) => res.status(httpStatus.OK).send(offer))
          .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
      })
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "bir hata oluştu..." })
      );
  }
}

module.exports = new OfferController();
