const httpStatus = require("http-status");
const ProductService = require("../services/ProductService");

class ProductController {
  getAll(req, res) {
    ProductService.getAll()
      .then((response) => res.status(httpStatus.OK).send(response))
      .catch((e) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Bir hata oluştu" })
      );
  }

  addProduct(req, res) {
    ProductService.create(req.body)
      .then((product) => res.status(httpStatus.CREATED).send(product))
      .catch((err) =>
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "Product Eklenirken bir hata oluştu.." })
      );
  }
}

module.exports = new ProductController();
