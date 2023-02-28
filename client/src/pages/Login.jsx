import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik"; 

import { login } from "../redux/authSlice";
import { loginValidation } from "../validations/loginSchema";
import { useEffect } from "react";
import { clearMessage } from "../redux/message";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  console.log(isLoggedIn.error);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const initialValues = {
    user_name: "",
    password: "",
  };
 

  const handleLogin = (formValue) => {
    const { user_name, password } = formValue;
    setLoading(true);

    dispatch(login({ user_name, password }))
      .unwrap()
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div class="bg-gray-100 flex rounded-2xl shadow-lg md:w-1/3 p-5 items-center">
        <div class="md:w-full px-8 md:px-16 py-16">
          <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
          <p class="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={handleLogin}
          
          >
            <Form className="flex flex-col">
              <Field name="user_name" placeholder="Kullanıcı Adı" type="text" className="p-2 mt-8 rounded-xl border" />
              <ErrorMessage
                name="user_name"
                component="div"
                className="text-red-400 text-sm"
              />

              <div className="relative py-2">
                <Field name="password" type="password" placeholder="Parola" className="p-2  rounded-xl border w-full" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-400 text-sm"
                />
              </div>

              <button type="submit" className="bg-[#002D74] rounded-xl text-white py-3 hover:scale-105 duration-300" disabled={loading}>
                {loading && (
                  <span className="animate-spin h-5 w-5 mr-3"></span>
                )}
                <span>Giriş Yap</span>
              </button>
            </Form>
          </Formik>
        </div>
        
      </div>
      {message && (
        <div className="">
          <div className="">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
