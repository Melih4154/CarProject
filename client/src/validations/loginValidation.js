
import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  user_name: Yup.string().required("Kullanıcı Adı veya Mail Adresi Giriniz."),
  password: Yup.string().required("Parola Giriniz."),
});