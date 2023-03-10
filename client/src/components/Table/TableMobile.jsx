import React from 'react'
import moment from "moment";
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function TableMobile(props) {
    const {data} = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pr-4 ">
        {data.map((item)=>(
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
  )
}