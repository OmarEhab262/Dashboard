import React, { useEffect } from "react";
import "./style.css";
import fimg from "../assists/imgs/fimg.png";
import rightArrow from "../assists/icon/rightArrow.png";
import rrr from "../assists/icon/rrr.png";
import uiwDate from "../assists/icon/uiw_date.png";
import mingcute from "../assists/icon/mingcute.png";
import carbon_location from "../assists/icon/carbon_location.png";
import ion_mic from "../assists/icon/ion_mic-outline.png";
import llll from "../assists/icon/llll.png";
import homeLogo from "../assists/imgs/homeLogo.svg";
import ggggg from "../assists/imgs/ggggg.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className=" m-4 flex flex-col items-center relative h-[550px] mx-auto w-[98%]">
      <img
        src={fimg}
        alt=""
        className="absolute z-[-2] w-full h-[550px] mx-auto  rounded-[24px]"
      />
      <div className="shade bg-black bg-opacity-50 absolute w-full h-[550px] z-[-1] rounded-[24px]"></div>
      <div
        className="nav rounded-[40px]  flex items-center justify-between  p-[8px] text-white text-center text-base lg:text-lg md:text-sm font-semibold mt-3 md:text-[12px] lg:text-[16px] lg:flex hidden"
        style={{ backgroundImage: `url(${ggggg})` }}
        data-aos="fade-down"
      >
        <div className=" cursor-pointer">
          <h3 className="active bg-[#E8E9F8] text-[#041461] rounded-[32px] p-[1rem] ">
            الصفحة الرئيسية
          </h3>
        </div>
        <div className=" cursor-pointer">
          <h3 className="p-[1rem] ">نبذة عنا</h3>
        </div>
        <div className=" cursor-pointer">
          <h3 className="p-[1rem] ">خدماتنا</h3>
        </div>

        <div className="px-[39] ">
          <img src={homeLogo} alt="" />
        </div>
        <div className=" cursor-pointer">
          <h3 className="p-[1rem] ">لماذا نحن</h3>
        </div>
        <div className=" cursor-pointer">
          <h3 className="p-[1rem] ">تواصل معنا</h3>
        </div>
        <div className=" cursor-pointer">
          <h3 className="p-[1rem] ">ابحث معنا</h3>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="center w-full flex justify-between my-auto items-center"
      >
        <div
          data-aos="fade-left"
          className="rArrow  border-white border-solid border-2 rounded-[8px] m-4 cursor-pointer w-[50px] h-[50px] flex justify-center items-center absolute right-0"
        >
          <img src={rrr} alt="" className=" w-[24px] " />
        </div>
        <div className="typography h-full flex justify-center gap-[24px] items-center flex-col text-[#E8E9F8] text-[37px] font-[600]  w-full text-center">
          <h3 className="sm:text-[37px] text-[27px] text-center w-[50%]">
            17-19 ابريل 2024
          </h3>
          <h2 className="sm:text-[45px] text-[35px] text-center w-[50%]">
            مؤتمر تحليل البيانات في القاهرة
          </h2>
          <div className="flex justify-between items-center text-[16px] mt-[10px] my-3   ">
            <div
              className="right flex justify-center items-center w-[150px] py-4  rounded-[16px] cursor-pointer text-center mx-4 "
              style={{
                backgroundImage: `url(${ggggg})`,
                backgroundPosition: "center",
              }}
            >
              <img
                src={rightArrow}
                alt=""
                className="bg-white ml-[16px] p-[5px] rounded-full "
              />
              <h3>احجز اﻷن</h3>
            </div>
            <div className="left flex justify-center items-center w-[150px] border-white border-solid border-2 py-4 rounded-[16px] cursor-pointer text-center mx-4 ">
              <h3>شاهد الفيديو</h3>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="lArrow  border-white border-solid border-2 rounded-[8px] m-4 cursor-pointer  w-[50px] h-[50px]  flex justify-center items-center absolute left-0"
        >
          <img src={llll} alt="" className=" w-[24px]" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className={`foot flex justify-between items-center  w-[80%] mb-[20px] py-[13px] px-[32px] rounded-[16px] lg:flex hidden`}
        style={{ backgroundImage: `url(${ggggg})` }}
      >
        <div className=" flex items-center gap-3">
          <img src={uiwDate} alt="" className="w-[40px] h-[40px]" />
          <div className="info">
            <h3 className="text-[16px] font-[600] text-white">التاريخ</h3>
            <h3 className="text-[#838389] text-[14px]">17-19 ابريل، 2024</h3>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img src={mingcute} alt="" className="w-[40px] h-[40px]" />
          <div className="info">
            <h3 className="text-[16px] font-[600] text-white">الميعاد</h3>
            <h3 className="text-[#838389] text-[14px]">10:00 am</h3>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img src={carbon_location} alt="" className="w-[40px] h-[40px]" />
          <div className="info">
            <h3 className="text-[16px] font-[600] text-white">المكان</h3>
            <h3 className="text-[#838389] text-[14px]">
              ارض المعارض، التجمع الخامس، القاهرة
            </h3>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img src={ion_mic} alt="" className="w-[40px] h-[40px]" />
          <div className="info">
            <h3 className="text-[16px] font-[600] text-white">الراعي</h3>
            <h3 className="text-[#838389] text-[14px]">شركة الرواد للبرمجه</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
