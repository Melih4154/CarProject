import { Form, Formik } from 'formik'
import React from 'react' 
import { addDocument } from '../../redux/documentSlice';
import { documentValidation } from '../../validations/documentValidation';

import { useDispatch } from 'react-redux'; 
import FormikControl from './FormikControl';
import CustomDocument from './CustomDocument';

export default function DocumentForm({ status, demage_id }) {

 
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
                  <FormikControl 
                    name="title"
                    placeholder="Başlık"
                    control= "input"
                    className="py-1 px-2 rounded-xl focus:outline-none"
                    />  
                </div>
                <div className="col-span-2">
                  <CustomDocument name="document" onChange={(event) => setFieldValue("document", event.target.files[0])}/>
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
