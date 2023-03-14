import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormikControl from '../components/Forms/FormikControl'
import Navbar from '../components/Navbar'
import { clearMessage } from '../redux/message';
import { passwordUpdate } from '../redux/userSlice';
import { userValidation } from "../validations/userValidation";

export default function PaswordChange() {

    const dispatch = useDispatch();
    const status = useSelector(state => state.user.status)
    const { message } = useSelector((state) => state.message);

    const initialValues = {
        old_password: "",
        password: "",
        password_again: "",
    };
    
    let detail;

    useEffect(() => {
        dispatch(clearMessage());
        detail = null;
    }, [detail, dispatch]);


    const changePassword = (formValue) => {
        const { old_password, password, password_again } = formValue;
        dispatch(passwordUpdate({ old_password, password, password_again }));

    };

    if (status === "succeeded") {
        detail = "Şifreniz Başarıyla Değiştirildi..."
    }else if (status === "failed") {
        detail = message;
    }

    return (
        <div className='w-full bg-slate-200'>
            <Navbar />

            <div className='p-20'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={userValidation}
                    onSubmit={changePassword}
                >
                    <Form className='space-y-2'>
                        <FormikControl control={"input"} placeholder="Eski Şireniz" name="old_password" className="w-1/4 rounded-xl p-2 border border-slate-200 focus:outline-none" />
                        <FormikControl control={"input"} placeholder="Yeni Şifre" name="password" className="w-1/4 rounded-xl p-2 border border-slate-200 focus:outline-none" />
                        <FormikControl control={"input"} placeholder="Yeni Şifre Tekrar" name="password_again" className="w-1/4 rounded-xl p-2 border border-slate-200 focus:outline-none" />
                        <button type="submit" className="bg-[#002D74] rounded-xl text-white py-1 px-10 hover:scale-105 duration-300">
                            <span>Değiştir</span>
                        </button>
                    </Form>
                </Formik>
                {
                    detail && (
                        <div className="w-1/4 p-4 mt-4 rounded-xl justify-center items-center bg-yellow-100 text-sm">
                            <div className={`bg-transparent ${message && "text-red-600" } text-green-700`} >**{detail}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
