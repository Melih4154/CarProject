import React, { useEffect } from "react";
import {  Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDemage } from "../redux/demageSlice";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { fetchUsers } from "../redux/userSlice";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const demages = useSelector((state) => state.demage);
  const demagesStatus = useSelector((state) => state.demage.status);

  
  const user = useSelector((state) => state.user);
  const userStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (demagesStatus === "idle") {
      dispatch(fetchDemage());
    }

    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [demagesStatus,userStatus, dispatch]);

 

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  let content;

  if (demagesStatus === "loading") {
    content = <div>Loading</div>;
  } else if (demagesStatus === "succeeded") {
    content = (
      <Table 
        data={demages.demages}
        usersData={user.data}
      />
    );
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="p-4"> 
        {content}
      </div> 
    </div>
  );
};

export default Home;
