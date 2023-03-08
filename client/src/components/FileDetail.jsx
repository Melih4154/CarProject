
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDocument } from "../redux/documentSlice";
import Button from './Button';
import FormPage from './FormPage';

export default function FileDetail({ demage_id }) {

    const dispatch = useDispatch();

    const documents = useSelector((state) => state.document);
    const documentStatus = useSelector((state) => state.document.status);
    const status = useSelector((state) => state.document.query);




    const [openFile, setOpenFile] = useState(false);


    useEffect(() => {

        if (documentStatus === "idle") {
            dispatch(fetchDocument({ status, demage_id }));
        }
    }, [demage_id, status, documentStatus, dispatch]);

    return (
        <>
            <div className="w-full flex py-4 pl-4 pr-16 text-2xl font-semibold justify-between text-cyan-700">
                <div>Evraklar</div>
                <Button className={"text-white rounded-lg text-[16px] px-4 py-[2px] bg-green-500 items-center justify-center"} onClick={() => setOpenFile(!openFile)} title={"Döküman Ekle"} />
            </div>

            {
                openFile &&
                <FormPage status={status} demage_id={demage_id} />
            }

            <div className="grid grid-cols-3 py-4 pl-4 pr-16" >

                <div className="border col-span-2 border-gray-300 font-bold p-2 justify-center">Belge Adı</div>
                <div className="border col-span-1 border-gray-300 font-bold p-2 justify-center">İşlemler</div>
                {
                    documents.data.map((d, key) => (
                        <>
                            {d.status === status && d.type === "documents" && <>
                                <div className="border col-span-2 border-gray-300 p-2 justify-center">{d.title}</div>
                                <div className="sm:flex border border-gray-300 p-2 font-semibold text-sm text-white">
                                    <Link target="brand" to={`http://localhost:3000/uploads/${status}/documents/${d.file_name}`} >
                                        <Button
                                            title={"Göster"} className={"bg-green-600 border p-1 px-10 border-cyan-200  items-center text-center justify-center rounded-lg text-white text-md"} />
                                    </Link>
                                    <Link target="brand" to={`http://localhost:3000/uploads/${status}/documents/${d.file_name}`}>
                                        <Button
                                            title={"Göster"} className={"bg-red-600 border p-1 px-10 border-cyan-200  items-center text-center justify-center rounded-lg text-white text-md"} />
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
                    documents.data.map((d, key) => (
                        <>
                            {d.status === status && d.type === "images" &&
                                <>
                                    <div className="border col-span-2 border-gray-300 p-2">{d.title}</div>
                                    <div className="sm:flex border border-gray-300 p-2 font-semibold text-sm text-white">
                                        <Link target="brand" to={`http://localhost:3000/uploads/${status}/images/${d.file_name}`} >
                                            <Button
                                                title={"Göster"} className={"bg-green-600 border p-1 px-10 border-cyan-200  items-center text-center justify-center rounded-lg text-white text-md"} />
                                        </Link>
                                        <Link target="brand" to={`http://localhost:3000/uploads/${status}/images/${d.file_name}`}>
                                            <Button
                                                title={"Göster"} className={"bg-red-600 border p-1 px-10 border-cyan-200  items-center text-center justify-center rounded-lg text-white text-md"} />
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
