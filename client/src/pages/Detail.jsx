import React from 'react'
import { useLocation } from 'react-router-dom';
import Column from '../components/Column';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar' 
import moment  from "moment";
 

function Detail() {

    const location = useLocation();
    const demageData = location.state; 

    let crashDate = moment(demageData.crash_date).format('DD.MM.YYYY');
    let createdAt = moment(demageData.createdAt).format('DD.MM.YYYY');
 

    return (
        
        <div className='w-full flex'>
           
           <Sidebar />
           <div className='w-full'>
           <Navbar />
           <div className='w-full py-4 pl-4 pr-16 '>
                    <Column head={"Dosya No"}  data={demageData.file_number} secondHead={"Kaza Tarihi"} secondData={crashDate}/>
                    <Column head={"İsim"}  data={demageData.user_id.full_name} secondHead={"Plaka"} secondData={demageData.number_plate}/>
                    <Column head={"TC/Vergi No"}  data={demageData.user_id.id_number} secondHead={"Açıklama"} secondData={demageData.explanation}/>
                    <Column head={"Kayıt Tarihi"}  data={createdAt} secondHead={"Dosya Durum"} secondData={demageData.status}/>
                    <Column head={"Dosya Konusu"}  data={demageData.subject} secondHead={"Tahkim Esas No"} secondData={demageData.arbitration_number}/>
                    <Column head={"Saha Personel"}  data={demageData.personel.user_name} secondHead={"Usta/Acente"} secondData={demageData.expert}/> 
                </div>
           </div>
            
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
        </div>
    )
}

export default Detail