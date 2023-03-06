const httpStatus = require("http-status");
const DocumentService = require("../services/Demage/DocumentService");

const path = require("path");

class DocumentController {
  create(req, res) {
    req.body.demage_id = req.params.demage_id;

    if (!req?.files?.document) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ error: "Önce döküman seçiniz." });
    }


    
    const extension = path.extname(req.files.document.name);
    const title = req.body.title.replace(" ", "");
    const fileName = req.params.demage_id + "-" + title + extension;
    let folderPath;

    if (extension === ".pdf") {
      req.body.type = "documents";
      folderPath = path.join(
        __dirname,
        "../",
        `/uploads/${req.body.status}/documents`,
        fileName
      );
    }else{
      
      req.body.type = "images"
      folderPath = path.join(
        __dirname,
        "../",
        `/uploads/${req.body.status}/images`,
        fileName
      );
    }

     

    req?.files?.document.mv(folderPath, function (err) {
      if (err) {
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: err });
      }

      req.body.file_name = fileName;

      return DocumentService.create(req.body)
        .then((document) => {
          return res.status(httpStatus.CREATED).send(document);
        })
        .catch((e) =>
          res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({ error: "Dosya yükleme işlemi sırasında bir hata oluştu." })
        );
    });
  }

  getAll(req,res){
    DocumentService.getAll({ status: req.params.status, demage_id: req.params.demage_id })
    .then((document) => 
     res.status(httpStatus.OK).send(document)
    )
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "bir hata oluştu..." })
    );
  }
}

module.exports = new DocumentController();
