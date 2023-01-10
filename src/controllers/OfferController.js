const OfferService = require("../services/OfferService");

class OfferController {
  makeComment(req, res) {
    OffersService.findOne({ _id: req.params.offers_id })
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
