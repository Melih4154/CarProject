import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from '../TextError';

export default function CustomSelect(props) {
  const { name, options, type, className, ...rest } = props

  
  return ( <div>  
      <Field as='select' id={name} name={name} {...rest} className={className}>   
      <option value="">Seçiniz...</option>  
        {options.map(option => { 
          return (            
              type === "data" ? (
              <option key={option._id} value={option._id}> 
                {option.full_name} 
              </option> ) : (
              <option key={option.id} value={option.title}> 
                {option.title} 
              </option> )
            
            
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}
