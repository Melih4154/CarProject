import React from 'react'

export default function Button({title, onClick, className}) {
  return (
    <div className={className} onClick={onClick}>{title}</div>
  )
}
//`text-white rounded-lg text-[16px] px-4 py-[2px]  ${color ? color : "bg-green-500"} items-center justify-center`