import * as Yup from "yup";

export const userValidation = Yup.object().shape({
  old_password: Yup.string().required("Eski şifrenizi girmelisiniz."),
  password: Yup.string().required("Parola Girmelisiniz."),
  password_again: Yup.string().required("Parolayı tekrar girmelisiniz."),
});