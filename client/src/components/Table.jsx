// import React, { useEffect, useState } from 'react'

// import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa"
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchDemage } from '../redux/demageSlice';
// import moment  from "moment";

// export default function TableComponent({ head, body, key }) {

//     // const  dispatch = useDispatch();
//     // const demage = useSelector((state)=>state.demage);

//     // useEffect(() => {
//     //     dispatch(fetchDemage());
//     //   }, [dispatch]);

//     const [sorting, setSorting] = useState(false)
//     const [search, setSearch] = useState('')

//     const filteredData = body && body.filter(
//         items => items.some(
//             item => (item?.key || item?.props?.searchableText || item).toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR'))
//         )
//         // eslint-disable-next-line array-callback-return
//     ).sort((a, b) => {
//         if (sorting?.orderBy === 'asc') {
//             return (a[sorting.key]?.key || a[sorting.key]?.props?.searchableText || a[sorting.key]).toString().localeCompare(b[sorting.key]?.key || b[sorting.key]?.props?.searchableText || b[sorting.key])
//         }
//         if (sorting?.orderBy === 'desc') {
//             return b[sorting.key].toString().localeCompare(a[sorting.key])
//         }
//     })

//     if (!body || body?.length === 0) {
//         return (
//             <div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">Gösterilecek veri bulunmuyor.</div>
//         )
//     }

// return (<>
//     <div className='rounded-lg shadow hidden md:block pt-3'>
//         <table className='w-full'>
//             <thead className='bg-gray-600 border-b-2 text-white border-gray-200 w-full'>
//                 <tr>
//                     {head.map((h, key) => (
//                         <th className='p-3 text-sm tracking-wide font-semibold text-left' key={key}>
//                             <div className="inline-flex items-center gap-x-2">{h.name}
//                                 {h.sortable && (<button onClick={() => {
//                                     if (sorting?.key === key) {
//                                         setSorting({
//                                             key,
//                                             orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
//                                         })
//                                     } else {
//                                         setSorting({
//                                             key,
//                                             orderBy: 'asc'
//                                         })
//                                     }
//                                 }}>
//                                     {sorting?.key === key && (
//                                         sorting.orderBy === 'asc' ? <FaSortDown size={14} /> : <FaSortUp size={14} />
//                                     )}
//                                     {sorting?.key !== key && <FaSort size={14} />}
//                                 </button>)}
//                             </div>
//                         </th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody className='divide-y divide-gray-100'>

//                 {filteredData.map((items, key) => (
//                     <tr className="group bg-white" key={key}>
//                         {items.map((item, key) => (

//                             <td
//                                 className="p-3 text-sm text-gray-700 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-600"
//                                 key={key}>
//                                 {Array.isArray(item) ? (
//                                     <div className="flex gap-x-2.5">
//                                         {item}
//                                     </div>
//                                 ) : item}
//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pr-4 md:hidden">
//         {filteredData.map((items, key) => (
//             <div className="bg-gray-600 p-4 rounded-lg shadow space-y-1 text-white font-semibold  text-sm">

//                 {items.map((item, key) => (
//                         <div className=" items-center space-x-2 text-sm">
//                             {Array.isArray(item) ? (<div className="flex gap-x-2.5">
//                                 {item}
//                             </div>) : item}
//                         </div>
//                     ))}
//             </div>

//         ))}
//     </div>
// </>
// )
// }

import moment from "moment";
import { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const TableComponent = ({ data }) => {
  const [users, setUsers] = useState(data);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");

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

  return (
    <>
      <input
        className="p-2 border rounded-xl w-1/4 outline-gray-400"
        placeholder="Ara."
        value={searchPhrase}
        onChange={search}
      />
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
                      <div className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white">
                        Detay
                      </div>
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
                  <div className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white">
                    Detay
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableComponent;
