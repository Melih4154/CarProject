import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

function CustomInput (props) {
  const {  name, className, ...rest } = props
  return (
    <div> 
      <Field id={name} name={name} {...rest}  className={className} 
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CustomInput