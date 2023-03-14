import * as Yup from "yup";

export const demageValidation = Yup.object().shape({
    full_name: Yup.string().required("İsim-soyisim girmelisiniz."),
    id_number: Yup.string().required("Kimlik no/vergi no girmelisiniz."),
    subject: Yup.string().required("Konu seçmelisiniz."),
    status: Yup.string().required("Durum girmelisiniz."),
    arbitration_number:Yup.string().required("Tahkim no girmelisiniz."),
    number_plate:Yup.string().required("Plaka girmelisiniz."),
    crash_date:Yup.date().required("Kaza tarihi seçmelisiniz."), 
    explanation:Yup.string().required("Açıklama girmelisiniz."),
    expert:Yup.string().required("Usta/Acente girmelisiniz."),
    brand:Yup.string().required("Aracın markasını girmelisiniz."), 
    model:Yup.string().required("Aracın modelini girmelisiniz."), 
    usage:Yup.string().required("Aracın kullanım şeklini girmelisiniz."), 
    engine_number:Yup.string().required("Aracın motor no girmelisiniz."),
    type:Yup.string().required("Aracın tipini girmelisiniz."),
    chassis_number:Yup.string().required("Aracın şase no girmelisiniz."),
    personel:Yup.string().required("Kullanıcı seçmelisiniz."),
});