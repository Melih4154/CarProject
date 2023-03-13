import React from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import 'react-datepicker/dist/react-datepicker.css'

function CustomDatePicker (props) {
  const { name, ...rest } = props
  return (
    <div> 
      <Field name={name} className=''>
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
              className='w-full py-1 px-2 rounded-xl focus:outline-none'
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CustomDatePicker