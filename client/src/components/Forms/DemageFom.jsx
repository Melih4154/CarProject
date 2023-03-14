import { useMediaQuery } from '@react-hook/media-query';
import { Formik,Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { addDemage } from '../../redux/demageSlice';
import { clearMessage } from '../../redux/message';
import { demageValidation } from '../../validations/demageValidation';
import FormikControl from './FormikControl'

export default function DemageFom(props) {
  const mdSize = useMediaQuery('(max-width: 945px)');
  const smSize = useMediaQuery('(max-width: 639px)');

  
  const { message } = useSelector((state) => state.message);
  const status = useSelector(state=> state.demage.status);
    const {usersData} = props;
    const dispatch =useDispatch(); 

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const subject =[
      { "id": "1", "title":"Hasar Danışmalığı"},
      { "id": "2", "title":"Değer Kaybı"},
      { "id": "3", "title":"Hasar ve Değer Kaybı"},
      { "id": "4", "title":"Değer Kaybı + Hasar Farkı"},
      { "id": "5", "title":"Kusura İtiraz ve Değer Kaybı"},
      { "id": "6", "title":"İcra"},
      { "id": "7", "title":"Pert"},
      { "id": "8", "title":"Tam Hasar + Değer Kaybı"},
    ]

    const initialValues = { full_name:"", id_number:"", subject:"", status:"", arbitration_number:"",
          number_plate:"", crash_date:null, explanation:"", expert:"", brand:"", model:"", usage:"", engine_number:"", type:"", chassis_number:"", personel:null
      };
    
      const demageAdd = (formValue, {resetForm}) => { 
        const {full_name, id_number, subject, status, arbitration_number, personel,
          number_plate, crash_date, explanation, expert, brand,model, usage, engine_number, type, chassis_number } = formValue;
          
          dispatch(addDemage({full_name, id_number, subject, status, arbitration_number, personel,
            number_plate, crash_date, explanation, expert, brand,model, usage, engine_number, type, chassis_number}));   
             
          resetForm({formValue : ''})
      };  

      let detail;

      if (status === "succeeded") {
        detail = "Kayıt başarıyla eklendi..."
      }else if (status === "failed") {
        detail = message;
      }

  return (
    <div className='w-full py-3'>
          <div className='bg-gray-200 py-3 rounded-lg'>
            <Formik
              initialValues={initialValues}
              validationSchema={demageValidation}
              onSubmit={demageAdd}
            >
              {({ setFieldValue }) => (
                
                
                <Form className="px-2 justify-center">
                  <div className='space-y-2 items-center text-center justify-center'>
                    <div className={`grid  ${smSize ? 'grid-cols-1' : mdSize ? 'grid-cols-2' : 'grid-cols-4'} gap-2`}> 
                      <FormikControl name="full_name" placeholder="İsim Soyisim" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none' />
                      <FormikControl name="id_number" placeholder="T.C.No/Vergi No" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl control='select' name='subject' options={subject} onChange={(e)=> setFieldValue("subject", e.target.value)} className='w-full py-1 px-2 rounded-xl focus:outline-none text-md text-gray-400 focus:text-black'/> 
                      <FormikControl name="status" placeholder="Dosya Durum" type="text" control='input'className='w-full py-1 px-2 rounded-xl focus:outline-none' />
                      <FormikControl name="arbitration_number" placeholder="Tahkim Esas No" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl control='select' name='personel' options={usersData} type="data" onChange={(e)=> setFieldValue("personel", e.target.value)} className='w-full py-1 px-2 rounded-xl focus:outline-none text-md text-gray-400 focus:text-black'/>
                      <FormikControl name="number_plate" placeholder="Plaka" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl control='date' name='crash_date' placeholder="Kaza Tarihi" className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="explanation" placeholder="Açıklama" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none' />
                      <FormikControl name="expert" placeholder="Usta/Acente" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="brand" placeholder="Aracın Markası" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="model" placeholder="Aracın Modeli" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="usage" placeholder="Kullanım Şekli" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="engine_number" placeholder="Motor No" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="type" placeholder="Aracın Tipi" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
                      <FormikControl name="chassis_number" placeholder="Şasi No" type="text" control='input' className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
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

            {
                    detail && (
                        <div className="w-1/4 p-4 mx-2 my-2 rounded-xl justify-center items-center bg-yellow-100 text-sm">
                            <div className={`bg-transparent ${message && "text-red-600" } text-green-700 ` } >**{detail}</div>
                        </div>
                    )
                }
          </div>
        </div>
  )
}
