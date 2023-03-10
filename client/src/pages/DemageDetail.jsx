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
    </div>
  );
}

export default DemageDetail;
