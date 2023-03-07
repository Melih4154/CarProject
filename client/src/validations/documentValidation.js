
import * as Yup from "yup";

export const documentValidation = Yup.object().shape({
  title: Yup.string().required("* Başlık Giriniz"),
  document: Yup.string().required("* Döküman seçiniz."),
});