
import { Field, Form, Formik, useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { addDocument, fetchDocument } from "../redux/documentSlice";

export default function FileDetail({ demage_id }) {

    const dispatch = useDispatch();

    let navigate = useNavigate();
    const documents = useSelector((state) => state.document);
    const documentStatus = useSelector((state) => state.document.status);
    const status = useSelector((state) => state.document.query);
 



    const [openFile, setOpenFile] = useState(false);
    const [openImage, setOpenImage] = useState(false);


    useEffect(() => {

        if (documentStatus === "idle") {
            dispatch(fetchDocument({ status, demage_id }));
        }
    }, [demage_id, status, documentStatus, dispatch]);

    

    const formik = useFormik({
        initialValues: {
            document: '',
            title: '', 
        },


        
        onSubmit: (values) => {   

            dispatch(addDocument(values.document, values.title, status, "64019171f3671bec7a71d733"))
           

        },
    });


    return (
        <>
            <div className="w-full flex py-4 pl-4 pr-16 text-2xl font-semibold justify-between text-cyan-700">
                <div>Evraklar</div>
                <div className='text-white rounded-lg text-[16px] px-4 py-[2px] bg-green-500 items-center justify-center' onClick={() => setOpenFile(!openFile)}>Ekle</div>
            </div>

            {
                openFile &&
                <div className='w-full pl-4 pr-16'>
                    <div className='bg-gray-200 py-3'>
                        <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                            <div>
                                <label> Name</label>
                                <input
                                    type='text'
                                    name='title'
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                />
                            </div> 
                            <div>
                                <label> Upload File</label>
                                <input
                                    type='file'
                                    name='document'  
                                    onChange={(e) =>
                                        formik.setFieldValue('document', e.currentTarget.files[0])
                                    }
                                />
                            </div>

                            <button type='submit'>Submit</button>
                        </form>
                    </div>

                </div>
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
                    documents.data.map((d, key) => (
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
