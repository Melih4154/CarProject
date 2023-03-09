import React from 'react'  

export default function SearchArea(props) {
    const { searchPhrase, search } = props
  return (
        <input
          className="p-2 border rounded-xl w-1/4 outline-gray-400"
          placeholder="Ara..."
          value={searchPhrase}
          onChange={search}
        />


  )
}
