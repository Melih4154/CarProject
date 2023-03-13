import React from 'react'
import moment from "moment";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";
import TableMobile from './TableMobile';
import { useMediaQuery } from '@react-hook/media-query'

export default function Table(props) {

  const { data, sortById, sorted, sortByName } = props;

  const size = useMediaQuery('(max-width: 945px)');

  return (
    <>
      {size ? <TableMobile data={data} /> :
        <div className="rounded-lg shadow  pt-3">
          <table className="w-full">
            <thead className="bg-gray-600 border-b-2 text-white border-gray-200 w-full">
              <tr>
                <th className="p-3 text-sm tracking-wide w-24 font-semibold text-left">
                  <div className="flex space-x-1">
                    <span className="inline-flex items-center gap-x-2">
                      D. No
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
                <th className="p-3 text-sm tracking-wide w-[450px] font-semibold text-left ">
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
                <th className="p-3 text-sm tracking-wide w-36 font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">T.C.No</div>
                </th>
                <th className="p-3 text-sm tracking-wide w-36 font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">Plaka</div>
                </th>
                <th className="p-3 text-sm tracking-wide w-36 font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">
                    Kayıt Tarihi
                  </div>
                </th>
                <th className="p-3 text-sm tracking-wide w-36 font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">
                    Kaza Tarihi
                  </div>
                </th>
                <th className="p-3 text-sm tracking-wide  w-44 font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">
                    Dosya Konusu
                  </div>
                </th>
                <th className="p-3 text-sm tracking-wide w-44 font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">Durum</div>
                </th>
                <th className="p-3 text-sm tracking-wide font-semibold text-left">
                  <div className="inline-flex items-center gap-x-2">İşlemler</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((item) => (
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
                      <Link to={`detail/dosya-bilgileri/${item._id}`} state={item}>
                        <Button title={"Güncelle"} className="h-8 px-4 flex items-center justify-center rounded bg-cyan-600 text-white" />
                      </Link>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }

    </>
  );
};



