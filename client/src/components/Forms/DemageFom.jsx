import { useMediaQuery } from '@react-hook/media-query';
import { Formik,Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'; 
import { addDemage } from '../../redux/demageSlice';
import FormikControl from './FormikControl'

export default function DemageFom(props) {
  const mdSize = useMediaQuery('(max-width: 945px)');
  const smSize = useMediaQuery('(max-width: 639px)');
    const {usersData} = props;
    const dispatch =useDispatch(); 

    const subject =[
      { "_id": "1", "full_name":"Hasar Danışmalığı"},
      { "_id": "2", "full_name":"Değer Kaybı"},
      { "_id": "3", "full_name":"Hasar ve Değer Kaybı"},
      { "_id": "4", "full_name":"Değer Kaybı + Hasar Farkı"},
      { "_id": "5", "full_name":"Kusura İtiraz ve Değer Kaybı"},
      { "_id": "6", "full_name":"İcra"},
      { "_id": "7", "full_name":"Pert"},
      { "_id": "8", "full_name":"Tam Hasar + Değer Kaybı"},
    ]

    const initialValues = { full_name:"", id_number:"", subject:"", status:"", arbitration_number:"",
          number_plate:"", crash_date:null, explanation:"", expert:"", brand:"", usage:"", engine_number:"", type:"", chassis_number:"", personel:null
      };
    
      const handleLogin = (formValue) => { 
        const {full_name, id_number, subject, status, arbitration_number, personel,
          number_plate, crash_date, explanation, expert, brand, usage, engine_number, type, chassis_number } = formValue;
          
          dispatch(addDemage({full_name, id_number, subject, status, arbitration_number, personel,
            number_plate, crash_date, explanation, expert, brand, usage, engine_number, type, chassis_number})); 
    
      };  
  return (
    <div className='w-full py-3'>
          <div className='bg-gray-200 py-3 rounded-lg'>
            <Formik
              initialValues={initialValues}
              //validationSchema={documentValidation}
              onSubmit={handleLogin}
            >
              {({ setFieldValue }) => (
                
                
                <Form className="px-2 justify-center">
                  <div className='space-y-2 items-center text-center justify-center'>
                    <div className={`grid  ${smSize ? 'grid-cols-1' : mdSize ? 'grid-cols-2' : 'grid-cols-4'} gap-2`}> 
                      <FormikControl name="full_name" placeholder="İsim Soyisim" type="text" control='input' />
                      <FormikControl name="id_number" placeholder="T.C.No/Vergi No" type="text" control='input' />
                      <FormikControl control='select' name='subject' options={subject} onChange={(e)=> setFieldValue("subject", e.target.value)} /> 
                      <FormikControl name="status" placeholder="Dosya Durum" type="text" control='input' />
                      <FormikControl name="arbitration_number" placeholder="Tahkim Esas No" type="text" control='input' />
                      <FormikControl control='select' name='personel' options={usersData}  onChange={(e)=> setFieldValue("personel", e.target.value)} />
                      <FormikControl name="number_plate" placeholder="Plaka" type="text" control='input' />
                      <FormikControl control='date' name='crash_date' placeholder="Kaza Tarihi" />
                      <FormikControl name="explanation" placeholder="Açıklama" type="text" control='input' />
                      <FormikControl name="expert" placeholder="Usta/Acente" type="text" control='input' />
                      <FormikControl name="brand" placeholder="Aracın Markası" type="text" control='input' />
                      <FormikControl name="usage" placeholder="Kullanım Şekli" type="text" control='input' />
                      <FormikControl name="engine_number" placeholder="Motor No" type="text" control='input' />
                      <FormikControl name="type" placeholder="Aracın Tipi" type="text" control='input' />
                      <FormikControl name="chassis_number" placeholder="Şasi No" type="text" control='input' />
                    </div>
                    <div className='py-3'>
                      <button
                        type="submit"
                        className="bg-[#002D74] rounded-xl text-white py-1 px-20 hover:scale-105 duration-300"
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
