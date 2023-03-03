import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDocument } from "../redux/documentSlice";

export default function FileDetail({ status, demage_id }) {

    const dispatch = useDispatch();
    const document = useSelector((state) => state.document);
    const documentStatus = useSelector((state) => state.document.status);


    useEffect(() => {
        if (documentStatus === "idle") {
            dispatch(fetchDocument({ status, demage_id }));
        }
    }, [demage_id, status, documentStatus, dispatch, document]);


    return (
        <>



            <div className="w-full py-4 pl-4 pr-16 text-2xl font-semibold  text-cyan-700">
                Evraklar
            </div>
            <div className="grid grid-cols-3 py-4 pl-4 pr-16" >

                <div className="border col-span-2 border-gray-300 font-bold p-2 justify-center">Belge Adı</div>
                <div className="border col-span-1 border-gray-300 font-bold p-2 justify-center">İşlemler</div>
                {
                    document.data.map((d, key) => (
                        <>
                            {d.status === status && d.type === "documents" && <>
                                <div className="border col-span-2 border-gray-300 p-2 justify-center">{d.title}</div>
                                <div className="sm:flex border border-gray-300 p-2 font-semibold text-sm text-white">
                                    <Link target="brand" to={`http://localhost:3000/uploads/${status}/documents/${d.file_name}`} className="w-full ">
                                        <div className='bg-green-600 border p-1 border-cyan-200  items-center text-center justify-center rounded-lg'>
                                            <div className="text-center justify-center text-white text-md">Göster</div>
                                        </div>
                                    </Link>
                                    <Link target="brand" to={`http://localhost:3000/uploads/${status}/documents/${d.file_name}`} className="w-full">
                                        <div className='bg-red-600 border p-1 border-cyan-200  items-center text-center justify-center rounded-lg'>
                                            <div className="text-center justify-center text-white text-md">Sil</div>
                                        </div>
                                    </Link>
                                </div>
                            </>}

                        </>
                    ))
                }


            </div>
            <div className="w-full py-4 pl-4 pr-16 text-2xl font-semibold  text-cyan-700">
                Resimler
            </div>
            <div className="grid grid-cols-3 py-4  pl-4 pr-16" >

                <div className="border col-span-2 border-gray-300 font-bold p-2 justify-center">Belge Adı</div>
                <div className="border col-span-1 border-gray-300 font-bold p-2 justify-center">İşlemler</div>
                {
                    document.data.map((d, key) => (
                        <>
                            {d.status === status && d.type === "images" &&
                                <>
                                    <div className="border col-span-2 border-gray-300 p-2">{d.title}</div>
                                    <div className="sm:flex border border-gray-300 p-2 font-semibold text-sm text-white">
                                        <Link target="brand" to={`http://localhost:3000/uploads/${status}/images/${d.file_name}`} className="w-full ">
                                            <div className='bg-green-600 border p-1 border-cyan-200  items-center text-center justify-center rounded-lg'>
                                                <div className="text-center justify-center text-white text-md">Göster</div>
                                            </div>
                                        </Link>
                                        <Link target="brand" to={`http://localhost:3000/uploads/${status}/images/${d.file_name}`} className="w-full">
                                            <div className='bg-red-600 border p-1 border-cyan-200  items-center text-center justify-center rounded-lg'>
                                                <div className="text-center justify-center text-white text-md">Sil</div>
                                            </div>
                                        </Link>
                                    </div>

                                </>
                            }
                        </>
                    ))
                }
            </div>
        </>
    )
}
