import React from "react";
import crreatedParty from "../assists/imgs/crreatedParty.png";
import arrow from "../assists/icon/arrow.png";
import SideBar from "./SideBar";
const CreatedParty = () => {
  const goBack = () => {
    window.location.href = "/AddEvents";
  };
  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh]">
        <div
          className={`header flex items-center w-[100%] h-[35px] mt-[5px] mb-[5px] `}
        >
          <img
            src={arrow}
            alt=""
            className="w-[27px] h-[27px] ml-[16px] cursor-pointer"
            onClick={goBack}
          />
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">إضافة حفلة</span>
          </h3>
        </div>
        <div className="w-[1080px] h-[944px] flex justify-center items-center mx-auto my-auto">
          <img src={crreatedParty} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default CreatedParty;
