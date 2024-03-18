import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import arrow from "../assists/icon/arrow.png";
import search from "../assists/icon/search.png";
import user from "../assists/imgs/mainuser.jpg";
import ticket from "../assists/imgs/pdf.png";

const ShowTicket = () => {
  const [searchInput, setSearchInput] = useState("");
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <div className="flex items-center">
              <button onClick={goBack} className="ml-[10px]">
                <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
              </button>
              <h3 className="text-[24px] font-bold text-[#041461]">
                لوحة المعلومات /
                <span className="text-[20px]">الحجوزات/التذاكر</span>
              </h3>
            </div>
          </div>
          <form
            // onSubmit={handleSearch}
            className="flex bg-[#041461] items-center w-[40%] p-[20px] rounded-[16px] h-[50px]"
          >
            <img
              src={search}
              alt="searchicon"
              className="w-[23px] h-[23px] ml-[20px] mb-[-5px] mr-[20px]"
            />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="text-[16px] font-bold text-white w-[80%] ml-[20px] bg-[#041461] outline-none placeholder-white"
              placeholder="ابحث في الحجوزات"
            />
          </form>
        </div>
        <div className="content border-2 w-full h-[538px] my-auto rounded-[16px] p-[36px]">
          <div className="head flex  items-center">
            <div className="right flex items-center ml-[356px]">
              <div className="img w-[63px] h-[63px] rounded-full ml-[14px]">
                {" "}
                <img src={user} alt="user" className="rounded-full" />
              </div>
              <div>
                <h3 className="text-[15px] font-[700] text-[#041461]">
                  سلمى محمود إبراهيم{" "}
                </h3>
                <h3>SalmaaAhmed12 @gmail.com</h3>
              </div>
            </div>
            <div className="left text-[15px] font-[700] text-[#041461] flex flex-col items-center justify-center ">
              <h3 className="mb-[5px]">عدد المرافقين</h3>
              <h3>5</h3>
            </div>
          </div>
          {/* Tickets Section with Scroll */}
          <div className="tickets mt-[80px] h-[340px] flex  w-full overflow-auto ssc overflow-y-hidden">
            <div className="ticket  h-[330px] flex">
              <a href={ticket} download className=" w-[300px] h-[300px]">
                <img
                  src={ticket}
                  alt="ticket"
                  className="   w-[300px] h-[300px] cursor-pointer"
                />
              </a>
              <a href={ticket} download className=" w-[300px] h-[300px]">
                <img
                  src={ticket}
                  alt="ticket"
                  className="   w-[300px] h-[300px] cursor-pointer"
                />
              </a>
              <a href={ticket} download className=" w-[300px] h-[300px]">
                <img
                  src={ticket}
                  alt="ticket"
                  className="   w-[300px] h-[300px] cursor-pointer"
                />
              </a>
              <a href={ticket} download className=" w-[300px] h-[300px]">
                <img
                  src={ticket}
                  alt="ticket"
                  className="   w-[300px] h-[300px] cursor-pointer"
                />
              </a>
              <a href={ticket} download className=" w-[300px] h-[300px]">
                <img
                  src={ticket}
                  alt="ticket"
                  className="   w-[300px] h-[300px] cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTicket;
