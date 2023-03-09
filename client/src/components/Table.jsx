import React, { useState } from 'react'
import { Form, Formik } from "formik";
import moment from "moment";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import FormikControl from './FormikControl'; 
import * as Yup from "yup"; 
import { useDispatch } from 'react-redux';
import { addDemage } from '../redux/demageSlice';
import SearchArea from './SearchArea';
import DemageFom from './DemageFom';

export default function Table({ data, usersData }) { 

  const dispatch =useDispatch();


  const [users, setUsers] = useState(data);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");

 const [openForm, setOpenForm] = useState(false);

  const search = (event) => {
    const matchedUsers = data.filter((user) => {
      return `${user.full_name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setUsers(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  const sortById = () => {
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.file_number - userB.file_number;
      }
      return userB.file_number - userA.file_number;
    });
    setUsers(usersCopy);
    setSorted({ sorted: "id", reversed: !sorted.reversed });
  };

  const sortByName = () => {
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.full_name}`;
      const fullNameB = `${userB.full_name}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setUsers(usersCopy);
    setSorted({ sorted: "name", reversed: !sorted.reversed });
  };


  // const initialValues = {
  //   file_number:"", full_name:"", id_number:"", subject:"", status:"", arbitration_number:"",
  //     number_plate:"", crash_date:null, explanation:"", expert:"", brand:"", usage:"", engine_number:"", type:"", chassis_number:"", personel:null
  // };

  // const handleLogin = (formValue) => {
  //   const { file_number, full_name, id_number, subject, status, arbitration_number, personel,
  //     number_plate, crash_date, explanation, expert, brand, usage, engine_number, type, chassis_number } = formValue;
      
  //     dispatch(addDemage({file_number, full_name, id_number, subject, status, arbitration_number, personel,
  //       number_plate, crash_date, explanation, expert, brand, usage, engine_number, type, chassis_number})); 

  // };

  return (
    <>
    <div className="flex justify-between items-center">
    <SearchArea search={search} searchPhrase={searchPhrase} />
    <Button className={"bg-green-500 justify-center items-center rounded-lg text-white py-[3px] px-6"} title={"Ekle"} onClick={() => setOpenForm(!openForm)} />
    </div>
       {/* <div className="flex justify-between items-center">
        <input
          className="p-2 border rounded-xl w-1/4 outline-gray-400"
          placeholder="Ara..."
          value={searchPhrase}
          onChange={search}
        />
        <Button className={"bg-green-500 justify-center items-center rounded-lg text-white py-[3px] px-6"} title={"Ekle"} onClick={() => setOpenForm(!openForm)} />
      </div> */}

      {
        openForm &&
        <DemageFom usersData= {usersData}/>
        // <div className='w-full py-3'>
        //   <div className='bg-gray-200 py-3 rounded-lg'>
        //     <Formik
        //       initialValues={initialValues}
        //       //validationSchema={documentValidation}
        //       onSubmit={handleLogin}
        //     >
        //       {({ setFieldValue }) => (
        //         <Form className="px-2 justify-center">
        //           <div className='space-y-2 items-center text-center justify-center'>
        //             <div className='grid grid-cols-4 gap-2'>
        //               <FormikControl name="file_number" placeholder="Dosya No" type="text" control='input' />
        //               <FormikControl name="full_name" placeholder="İsim Soyisim" type="text" control='input' />
        //               <FormikControl name="id_number" placeholder="T.C.No/Vergi No" type="text" control='input' />
        //               <FormikControl name="subject" placeholder="Dosya Konusu" type="text" control='input' />
        //               <FormikControl name="status" placeholder="Dosya Durum" type="text" control='input' />
        //               <FormikControl name="arbitration_number" placeholder="Tahkim Esas No" type="text" control='input' />
        //               <FormikControl control='select' name='selectOption' options={usersData} onChange={(e)=> setFieldValue("personel", e.target.value)}/>
        //               <FormikControl name="number_plate" placeholder="Plaka" type="text" control='input' />
        //               <FormikControl control='date' name='crash_date' placeholder="Kaza Tarihi" />
        //               <FormikControl name="explanation" placeholder="Açıklama" type="text" control='input' />
        //               <FormikControl name="expert" placeholder="Usta/Acente" type="text" control='input' />
        //               <FormikControl name="brand" placeholder="Aracın Markası" type="text" control='input' />
        //               <FormikControl name="usage" placeholder="Kullanım Şekli" type="text" control='input' />
        //               <FormikControl name="engine_number" placeholder="Motor No" type="text" control='input' />
        //               <FormikControl name="type" placeholder="Aracın Tipi" type="text" control='input' />
        //               <FormikControl name="chassis_number" placeholder="Şasi No" type="text" control='input' />
        //             </div>
        //             <div className='py-3'>
        //               <button
        //                 type="submit"
        //                 className="bg-[#002D74] rounded-xl text-white py-1 px-20 hover:scale-105 duration-300"
        //               >
        //                 <span>Ekle</span>
        //               </button>
        //             </div>
        //           </div>
        //         </Form>
        //       )}

        //     </Formik>

        //   </div>
        // </div>
      } 

      <div className="rounded-lg shadow hidden md:block pt-3">
        <table className="w-full">
          <thead className="bg-gray-600 border-b-2 text-white border-gray-200 w-full">
            <tr>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="flex space-x-1">
                  <span className="inline-flex items-center gap-x-2">
                    Dosya No
                  </span>
                  <span onClick={sortById}>
                    {sorted.sorted === "id" && sorted.reversed ? (
                      <FaSortUp size={14} />
                    ) : (
                      <FaSortDown size={14} />
                    )}
                  </span>
                </div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left ">
                <div className="flex space-x-1">
                  <span className="inline-flex items-center gap-x-2">
                    İsim Soyisim
                  </span>
                  <span onClick={sortByName}>
                    {sorted.sorted === "name" && sorted.reversed ? (
                      <FaSortUp size={14} />
                    ) : (
                      <FaSortDown size={14} />
                    )}
                  </span>
                </div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">T.C.No</div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">Plaka</div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">
                  Kayıt Tarihi
                </div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">
                  Kaza Tarihi
                </div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">
                  Dosya Konusu
                </div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">Durum</div>
              </th>
              <th className="p-3 text-sm tracking-wide font-semibold text-left">
                <div className="inline-flex items-center gap-x-2">İşlemler</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((item) => (
              <tr className="group bg-white" key={item._id}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">{item.file_number}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">{item.full_name}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">{item.id_number}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">{item.number_plate}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">
                    {moment(item.createdAt).format("DD.MM.YYYY")}
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">
                    {moment(item.crash_date).format("DD.MM.YYYY")}
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">{item.subject}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">{item.status}</div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600">
                  <div className="flex gap-x-2.5">
                    <Link to={`detail/dosya-bilgileri/${item._id}`} state={item}>
                      <Button title={"Detay"} className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pr-4 md:hidden">
        {users.map((item, key) => (
          <div className="bg-gray-600 p-4 rounded-lg shadow space-y-1 text-white font-semibold text-sm">
            <div className="items-center space-y-3 text-sm">
              <div className="flex gap-x-2.5">
                <span>Dosya No:</span>
                <span>{item.file_number}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>İsim Soyisim:</span>
                <span>{item.full_name}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>T.C.No:</span>
                <span>{item.id_number}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>Plaka:</span>
                <span>{item.number_plate}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>Kayıt Tarihi:</span>
                <span>{moment(item.createdAt).format("DD.MM.YYYY")}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>Kaza Tarihi:</span>
                <span>{moment(item.crash_date).format("DD.MM.YYYY")}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>Dosya Konusu:</span>
                <span>{item.subject}</span>
              </div>
              <div className="flex gap-x-2.5">
                <span>Durum:</span>
                <span>{item.status}</span>
              </div>
              <div className="flex gap-x-2.5">
                <Link to={`/demage/${item._id}`} state={item}>
                  <Button title={"Detay"} className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

