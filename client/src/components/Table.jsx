import React, { useEffect, useState } from 'react'

import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { fetchDemage } from '../redux/demageSlice';

export default function TableComponent({ head, body, key }) {

    // const  dispatch = useDispatch();
    // const demage = useSelector((state)=>state.demage);

    // useEffect(() => {
    //     dispatch(fetchDemage());
    //   }, [dispatch]);


    const [sorting, setSorting] = useState(false)
    const [search, setSearch] = useState('')


    const filteredData = body && body.filter(
        items => items.some(
            item => (item?.key || item?.props?.searchableText || item).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR'))
        )
        // eslint-disable-next-line array-callback-return
    ).sort((a, b) => {
        if (sorting?.orderBy === 'asc') {
            return (a[sorting.key]?.key || a[sorting.key]?.props?.searchableText || a[sorting.key]).toString().localeCompare(b[sorting.key]?.key || b[sorting.key]?.props?.searchableText || b[sorting.key])
        }
        if (sorting?.orderBy === 'desc') {
            return b[sorting.key].toString().localeCompare(a[sorting.key])
        }
    })

    if (!body || body?.length === 0) {
        return (
            <div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">Gösterilecek veri bulunmuyor.</div>
        )
    }

    return (<>
        <div className='rounded-lg shadow hidden md:block pt-3'>
            <table className='w-full'>
                <thead className='bg-gray-600 border-b-2 text-white border-gray-200 w-full'>
                    <tr>
                        {head.map((h, key) => (
                            <th className='p-3 text-sm tracking-wide font-semibold text-left' key={key}>
                                <div className="inline-flex items-center gap-x-2">{h.name}
                                    {h.sortable && (<button onClick={() => {
                                        if (sorting?.key === key) {
                                            setSorting({
                                                key,
                                                orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
                                            })
                                        } else {
                                            setSorting({
                                                key,
                                                orderBy: 'asc'
                                            })
                                        }
                                    }}>
                                        {sorting?.key === key && (
                                            sorting.orderBy === 'asc' ? <FaSortDown size={14} /> : <FaSortUp size={14} />
                                        )}
                                        {sorting?.key !== key && <FaSort size={14} />}
                                    </button>)}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>

                    {filteredData.map((items, key) => (
                        <tr className="group bg-white" key={key}>
                            {items.map((item, key) => (
                                <td
                                    className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600"
                                    key={key}>
                                    {Array.isArray(item) ? (
                                        <div className="flex gap-x-2.5">
                                            {item}
                                        </div>
                                    ) : item}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pr-4 md:hidden"> 
            {filteredData.map((items, key) => (
                <div className="bg-gray-600 p-4 rounded-lg shadow space-y-1 text-white font-semibold  text-sm">
                    
                    {items.map((item, key) => (
                            <div className=" items-center space-x-2 text-sm">
                                {Array.isArray(item) ? (<div className="flex gap-x-2.5">
                                    {item}
                                </div>) : item}
                            </div>
                        ))} 
                </div>

            ))}
        </div> 
    </>
    )
}
{/* {filteredData.map((items, key) => (
                <div className="bg-red-300 p-4 rounded-lg shadow">
                    {items.map((item, key) => (
                        <div className=" items-center text-black space-x-2 text-sm">
                            {Array.isArray(item) ? (<div className="flex gap-x-2.5">
                                            {item}
                                        </div>) : item}
                        </div>
                    ))}
                </div>
            ))} */}