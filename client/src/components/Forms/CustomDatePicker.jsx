import React from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import 'react-datepicker/dist/react-datepicker.css'

function CustomDatePicker (props) {
  const { name, className,...rest } = props
  return (
    <div> 
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              
              placeholderText={props.placeholder}
              dateFormat = "dd.MM.yyyy"
              selected={value}
              
              onChange={val => setFieldValue(name, val)}
              className= {className}
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CustomDatePicker