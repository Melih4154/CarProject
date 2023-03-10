import React from 'react' 
import CustomSelect from './CustomSelect'
import CustomInput from './CustomInput'
import CustomDatePicker from './CustomDatePicker'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <CustomInput {...rest} /> 
    case 'select':
      return <CustomSelect {...rest} />  
    case 'date':
      return <CustomDatePicker {...rest} /> 
    default:
      return null
  }
}

export default FormikControl