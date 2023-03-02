import React, { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchDemage, selectAllDemage } from "../redux/demageSlice";
import Navbar from "../components/Navbar";
import TableComponent from "../components/Table";

const Home = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

   

  const dispatch = useDispatch();
  const demages = useSelector((state) => state.demage);
  //const demages = useSelector(selectAllDemage)
  const demagesStatus = useSelector((state) => state.demage.status);

  useEffect(() => {
    if (demagesStatus === 'idle') {
      dispatch(fetchDemage())
    } 
  }, [demagesStatus, dispatch]);




  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  let content

  if (demagesStatus === 'loading') {
    content = <div>Loading</div>
  } else if (demagesStatus === 'succeeded') {
    content = <TableComponent 
    // head={[
    //   { name: 'D.No', sortable: true },
    //   { name: 'İsim Soyisim' },
    //   { name: 'T.C.No', sortable: true },
    //   { name: 'Plaka', width: 200 },
    //   { name: 'Kayıt Tarihi', width: 200 },
    //   { name: 'Kaza Tarihi', width: 200 },
    //   { name: 'Dosya Konusu', width: 200 },
    //   { name: 'Durum', width: 200 },
    //   { name: 'İşlemler', width: 200 },
    // ]}  
    // body={demages.data.map((demage, key) => (
    //   [demage.file_number, demage.user_id.full_name, demage.user_id.id_number, demage.number_plate, demage.createdAt, demage.crash_date, demage.subject, demage.status,
    //     <Link  to={`/${demage._id}`} state={demage}> <div className="h-8 px-4 flex items-center justify-center rounded bg-green-600 text-white">Detay</div></Link>]
    // ))}
    data={demages.data} 
    />
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="p-4">
      {/* <input
          className="search"
          placeholder="Search..."
          onChange={""}
        /> */}
        {content}
      </div>
      {/* {console.log(demagesStatus)}
      {console.log(demages)} 
      {demagesStatus === "loading" ? <div>Loading</div> :  <TableComponent body={demages && demages.map((demage, key)=> ([
          demage.user_id.user_name,
          demage.expert,
          demage.brand
            			
      ]))} />} */}

    </div>
  );

  // const  dispatch = useDispatch();
  //   const demage = useSelector((state)=>state.demage);

  //   useEffect(() => {
  //       dispatch(fetchDemage());
  //     }, [dispatch]);
  // const { user: currentUser } = useSelector((state) => state.auth);

  // console.log(demage);

  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }

  // console.log(currentUser);
  // return (
  //   <div className="">
  //     <header className="">
  //       <h3>
  //         <strong>{currentUser.user_name}</strong> Profile
  //       </h3>
  //     </header>
  //     <p>
  //       <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
  //       {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
  //     </p>
  //     <p>
  //       <strong>Id:</strong> {currentUser.id}
  //     </p>
  //     <p>
  //       <strong>Email:</strong> {currentUser.email}
  //     </p>
  //     <strong>Authorities:</strong>
  //     <ul>
  //       {currentUser.roles &&
  //         currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
  //     </ul>
  //   </div>
  //);
};

export default Home;
