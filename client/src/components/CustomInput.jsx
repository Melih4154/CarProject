import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function CustomInput (props) {
  const {  name, ...rest } = props
  return (
    <div> 
      <Field id={name} name={name} {...rest}  className='w-full py-1 px-2 rounded-xl focus:outline-none'/>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CustomInput