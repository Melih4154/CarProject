import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDemage } from "../redux/demageSlice";
import Navbar from "../components/Navbar";
import Table from "../components/Table/Table";
import { fetchUsers } from "../redux/userSlice";
import SearchArea from "../components/SearchArea";
import DemageFom from "../components/Forms/DemageFom";
import Button from "../components/Button";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const demages = useSelector((state) => state.demage.demages);
  const demagesStatus = useSelector((state) => state.demage.status);

  const user = useSelector((state) => state.user);
  const userStatus = useSelector((state) => state.user.status);

  const [demageList, setdemageList] = useState(demages);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [searchPhrase, setSearchPhrase] = useState("");
  const [openForm, setOpenForm] = useState(false);


  const search = (event) => {
    const matchedUsers = demages.filter((user) => {
      return `${user.full_name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setdemageList(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  const sortById = () => {
    const usersCopy = [...demageList];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.file_number - userB.file_number;
      }
      return userB.file_number - userA.file_number;
    });
    setdemageList(usersCopy);
    setSorted({ sorted: "id", reversed: !sorted.reversed });
  };

  const sortByName = () => {
    const usersCopy = [...demageList];
    usersCopy.sort((userA, userB) => {
      const fullNameA = `${userA.full_name}`;
      const fullNameB = `${userB.full_name}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setdemageList(usersCopy);
    setSorted({ sorted: "name", reversed: !sorted.reversed });
  };


  useEffect(() => {
    if (demagesStatus === "idle") {
      dispatch(fetchDemage());
    }

    setdemageList(demages)

    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [demagesStatus, userStatus, dispatch, demages]);



  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  let content;

  if (demagesStatus === "loading") {
    content = <div>Loading</div>;
  } else if (demagesStatus === "succeeded") {
    content = (
      <Table
        data={demageList}
        sortById={sortById}
        sortByName={sortByName}
        sorted={sorted}
      />
    );
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-between items-center py-3 px-8">
        <SearchArea search={search} searchPhrase={searchPhrase} />
        {
          openForm ? <div className='w-8 h-8 rounded justify-center cursor-pointer bg-gray-300 items-center'  onClick={() => setOpenForm(false)}>
            <AiOutlineClose className='text-xl text-white w-full mt-[5px]' />
          </div> :
            <Button className={"bg-green-500 justify-center items-center rounded-lg text-white py-[3px] px-6 cursor-pointer"} title={"Ekle"} onClick={() => setOpenForm(true)} />}
      </div> {
        openForm &&
        <div className="px-5">
          <DemageFom usersData={user.data} />
        </div>}

      <div className="p-4">
        {content}
      </div>
    </div>
  );
};

export default Home;
