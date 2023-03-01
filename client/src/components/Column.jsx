import React from 'react'

function Column({ head, secondHead, data, secondData }) {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2'>
            <div className='border border-gray-300 p-2  justify-center'>
                <div className="text-base font-bold">{head}</div>
            </div>
            <div className='border border-gray-300 p-2  justify-center'>
                <div className="text-gray-800 font-semibold">{data}</div>
            </div>
            <div className='border border-gray-300 p-2  justify-center'>
                <div className="text-base font-bold">{secondHead}</div>
            </div>
            <div className='border border-gray-300 p-2  justify-center'>
                <div className="text-gray-800 font-semibold">{secondData}</div>
            </div>
        </div>
    )
}

export default Column