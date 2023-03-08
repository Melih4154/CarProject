import React, { useState } from "react";
import {
  AiOutlineClose, 
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { changeQuery  } from "../redux/documentSlice";
import { sideBarData } from "../utils/data";

function Sidebar({demage}) {
  const [showSidebar, setshowSidebar] = useState(false); 

  const [side, setSide] = useState(sideBarData);

  const dispatch= useDispatch();

  return (
    <div className="flex min-h-screen py-3 px-3 ">
      {showSidebar ? (
        <div
          className={`bg-slate-600 w-64 text-white px-2 py-4 inset-y-0 space-y-6 rounded-2xl `}
        >
          <div className="flex">
            <div className="hover:cursor-pointer">
            {  
             side && side.map((s,key)=> (
                <Link to={`${s.url}/${demage._id}`}  onClick={()=> dispatch(changeQuery(s.query))}> 
                <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:cursor-pointer hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                  {s.icon}
                  <span className="text-white">{s.title}</span>
                </div>
                </Link>
             ))
              } 
            </div>
            <div
              className="flex lg:hidden w-8 h-8 translate-x-5 border border-gray-400 rounded items-center justify-center"
              onClick={() => setshowSidebar(false)}
            >
              <AiOutlineClose className=" text-xl" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`hidden lg:block bg-slate-600 rounded-2xl w-64 text-white px-2 py-4 inset-y-0 space-y-6 `}
        >
          <div className="flex">
            <div>
              {  
             side && side.map((s,key)=> (
                <Link to={`${s.url}/${demage._id}`}  onClick={()=> dispatch(changeQuery(s.query))}> 
                <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:cursor-pointer hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                  {s.icon}
                  <span className="text-white">{s.title}</span>
                </div>
                </Link>
             ))
              }
            
            </div>
          </div>
        </div>
      )}
      {!showSidebar && (
        <div
          className="flex lg:hidden w-10 h-10 translate-y-3 border border-gray-400 rounded items-center justify-center"
          onClick={() => setshowSidebar(true)}
        >
          <div className="items-center justify-center">
            <AiOutlineMenuUnfold className=" text-3xl" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
