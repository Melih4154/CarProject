import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFileSearch,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

function Sidebar() {
  const [showSidebar, setshowSidebar] = useState(false);

  return (
    <div className="flex min-h-screen py-3 px-3 ">
      {showSidebar ? (
        <div
          className={`bg-slate-600 w-64 text-white px-2 py-4 inset-y-0 space-y-6 rounded-2xl `}
        >
          <div className="flex">
            <div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Dosya Bilgileri</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Dat Raporu</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Sigorta</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Tahkim</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Eksper</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Ön Ödeme</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Ödeme</span>
              </div>
            </div>
            <div
              className="flex lg:hidden w-8 h-8 translate-x-12 border border-gray-400 rounded items-center justify-center"
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
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Dosya Bilgileri</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Dat Raporu</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Sigorta</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Tahkim</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Eksper</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Ön Ödeme</span>
              </div>
              <div className="group flex items-center py-3 space-x-2 px-4 rounded hover:bg-slate-700 hover:text-yellow-50 transition duration-200 ">
                <AiOutlineFileSearch />
                <span className="text-white">Ödeme</span>
              </div>
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
