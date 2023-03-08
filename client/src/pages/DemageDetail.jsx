import React from "react";
import { useParams } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"; 
import Detail from "../components/Detail";
import FileDetail from "../components/FileDetail"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDemageById } from "../redux/demageSlice";

function DemageDetail() {
  // const location = useLocation();
  // const demageData = location.state;
 const params = useParams(); 

  const dispatch = useDispatch();
  const demage = useSelector((state) => state.demage);
  const demageStatus = useSelector((state) => state.demage.demageStatus);

  useEffect(() => {
    if (demageStatus === "idle") {
      dispatch(fetchDemageById(params.demage_id));
    }
  }, [demageStatus, dispatch, params.demage_id]);
    
  return (
    demageStatus ==="succeeded" &&
    <div className="w-full flex">
      <Sidebar demage={demage.demage}/>
      <div className="w-full">
        <Navbar />
        <Detail data={demage.demage}/>
        
        <FileDetail demage_id={demage.demage._id}/>
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
  );
}

export default DemageDetail;
