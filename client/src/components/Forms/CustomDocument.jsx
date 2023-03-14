import { ErrorMessage } from 'formik'
import React from 'react'
import TextError from '../TextError'

export default function CustomDocument(props) {
    const {name, className, ...rest}=props;
    return (
        <div>
            <input
                name={name} {...rest}
                type="file"
                className={className}
            />
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}