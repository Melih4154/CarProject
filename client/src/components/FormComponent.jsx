import { ErrorMessage, Field, } from 'formik'
import React from 'react'

export default function FormComponent({ name, placeholder, type, as }) {


  //   };
  return (

    <>
      {as === "select" ? 
      <Field as="select" name={name} className="py-1 w-full rounded-xl focus:outline-none" placeholder="Kullanıcı Seçiniz">
        <option disabled value="">(Select a player 1)</option>
      </Field> : <>
        <Field
          name={name}
          placeholder={placeholder}
          type={type}
          className="py-1 px-2 w-full rounded-xl focus:outline-none"
        />
        <span className="py-2">
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-400 text-sm"
          />
        </span> </>}
    </>

  )
}
