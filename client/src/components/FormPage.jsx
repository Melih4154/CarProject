import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react' 
import { addDocument } from '../redux/documentSlice';
import { documentValidation } from '../validations/documentValidation';

import { useDispatch } from 'react-redux'; 

export default function FormPage({ status, demage_id }) {

 
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    document: "",
  };

  const handleLogin = (formValue) => {
    const { title, document } = formValue;

    dispatch(addDocument({ document, title, status, demage_id }))

  };
  return (
    <div className='w-full pl-4 pr-16'>
      <div className='bg-gray-200 py-3 rounded-lg'>
        <Formik
          initialValues={initialValues}
          validationSchema={documentValidation}
          onSubmit={handleLogin}
        >
          {({ setFieldValue }) => (

            <Form className="px-2 justify-center">
              <div className="grid-cols-1 grid md:grid-cols-6 gap-4">
                <div className="col-span-2">
                  <Field
                    name="title"
                    placeholder="Başlık"
                    type="text"
                    className="py-1 px-2 rounded-xl focus:outline-none"
                  />
                  <span className="py-2">
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-400 text-sm"
                    />
                  </span>
                </div>
                <div className="col-span-2">
                  <input
                    name="document"
                    type="file"
                    onChange={(event) => setFieldValue("document", event.target.files[0])}
                    className="w-full"
                  />
                  <span className="py-2">
                    <ErrorMessage
                      name="document"
                      component="div"
                      className="text-red-400 text-sm"
                    />
                  </span>
                </div>
                <div className="col-span-1"> 
                  <button
                    type="submit"
                    className="bg-[#002D74] rounded-xl text-white py-1 px-10 hover:scale-105 duration-300"
                  >
                    <span>Ekle</span>
                  </button>
                </div>
              </div>
            </Form>
          )}

        </Formik>
      </div>

    </div>
  )
}
