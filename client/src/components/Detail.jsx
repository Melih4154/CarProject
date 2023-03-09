import React from "react";
import Column from "../components/Column";
import moment from "moment";
import { fileData } from "../utils/data";
import { useSelector } from "react-redux";

function Detail({ data }) {

  let crashDate = moment(data.crash_date).format("DD.MM.YYYY");
  let createdAt = moment(data.createdAt).format("DD.MM.YYYY");


  const status = useSelector((state) => state.document.query);
 


  return (
    <div className="w-full py-4 pl-4 pr-16 ">
      <Column
        head={"Dosya No"}
        data={data.file_number}
        secondHead={"Kaza Tarihi"}
        secondData={crashDate}
      />
      <Column
        head={"İsim"}
        data={data.full_name}
        secondHead={"Plaka"}
        secondData={data.number_plate}
      />
      <Column
        head={"TC/Vergi No"}
        data={data.id_number}
        secondHead={"Açıklama"}
        secondData={data.explanation}
      />
      <Column
        head={"Kayıt Tarihi"}
        data={createdAt}
        secondHead={"Dosya Durum"}
        secondData={data.status}
      />
      <Column
        head={"Dosya Konusu"}
        data={data.subject}
        secondHead={"Tahkim Esas No"}
        secondData={data.arbitration_number}
      />
      <Column
        head={"Saha Personel"}
        data={data.personel.full_name}
        secondHead={"Usta/Acente"}
        secondData={data.expert}
      />

      {status === "dat-raporu" && <>
      
      <div className="w-full py-3 text-xl font-semibold justify-between text-cyan-700">
          <div>Araç Bilgileri</div>
          
        </div>
      <Column
            head={"Aracın Markası"}
            data={data.brand}
            secondHead={"Model ve Cinsi"}
            secondData={data.model}
          />
          <Column
            head={"Kullanım Şekli"}
            data={data.usage}
            secondHead={"Aracın Tipi"}
            secondData={data.type}
          />
          <Column
            head={"Motor No"}
            data={data.engine_number}
            secondHead={"Şasi No"}
            secondData={data.chassis_number}
          />
      </>
        
      }
    </div>


  );
}

export default Detail;


{/* <div className="flex">
                <Sidebar />
                <div className='w-full py-4 pl-4 pr-16 '>
                    <Column head={"Dosya No"}  data={demageData.file_number} secondHead={"Kaza Tarihi"} secondData={crashDate}/>
                    <Column head={"İsim"}  data={demageData.user_id.full_name} secondHead={"Plaka"} secondData={demageData.number_plate}/>
                    <Column head={"TC/Vergi No"}  data={demageData.user_id.id_number} secondHead={"Açıklama"} secondData={demageData.explanation}/>
                    <Column head={"Kayıt Tarihi"}  data={createdAt} secondHead={"Dosya Durum"} secondData={demageData.status}/>
                    <Column head={"Dosya Konusu"}  data={demageData.subject} secondHead={"Tahkim Esas No"} secondData={demageData.arbitration_number}/>
                    <Column head={"Saha Personel"}  data={demageData.personel.user_name} secondHead={"Usta/Acente"} secondData={demageData.expert}/> 
                </div>

                <div className='w-full py-4 pl-4 pr-16 lg:hidden'>
                    
                </div>
            </div> */} 