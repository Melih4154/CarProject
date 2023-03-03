import React from "react"; 
import Column from "../components/Column"; 
import moment from "moment";

function Detail({data}) { 

  let crashDate = moment(data.crash_date).format("DD.MM.YYYY");
  let createdAt = moment(data.createdAt).format("DD.MM.YYYY");

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