import React from 'react'

function TextError (props) {
  return <div className='text-red-500 text-sm px-1 py-1 text-start'>*{props.children}</div>
}

export default TextError