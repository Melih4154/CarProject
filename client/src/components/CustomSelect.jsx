import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError';

export default function CustomSelect(props) {
  const { name, options, ...rest } = props
  return (
    <div> 
      <Field as='select' id={name} name={name} {...rest} className='w-full py-1 px-2 rounded-xl focus:outline-none text-md text-gray-400 focus:text-black'>      
        {options.map(option => { 
          return (  
            <option key={option._id} value={option._id}>
              {option.full_name}
            </option> 
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}
