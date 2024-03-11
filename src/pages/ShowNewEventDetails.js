import React, { useState } from "react";
import SideBar from "../components/SideBar";
import date from "../assists/icon/date.png";
import location from "../assists/icon/location.png";
import time from "../assists/icon/time.png";
import arrow from "../assists/icon/arrow.png";
import party from "../assists/imgs/party.png";
const ShowNewEventDetails = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <button onClick={goBack} className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </button>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات/{" "}
              <span className="text-[20px]"> فان داى كلية علوم</span>
            </h3>
          </div>
        </div>
        <div className="info flex py-[20px]  w-full h-auto overflow-hidden ">
          <div className="img h-[231px] w-[30%]">
            <img
              src={party}
              alt="party"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="content w-[70%] px-[32px] mb-[50px]">
            <div className="header mb-[36px] ">
              <div className="top mb-[10px]">
                <h3 className="text-[32px] font-[700] text-[#041461]">
                  فان داى كلية علوم
                </h3>
              </div>
              <div className="bot text-[16px] flex ml-[32px] w-full gap-[30px] ">
                <div className="date flex mt-[5px]">
                  <img src={date} alt="date" className="w-[16px] h-[16px]" />
                  <h3 className="text-[15px] mr-[10px]">
                    اﻷثنين، 16 اغسطس 2024
                  </h3>
                </div>
                <div className="time flex mt-[5px] mx-[32px] items-center">
                  <div className="h-[150%] w-[2px] bg-gray-400  ml-[10px]"></div>
                  <img src={time} alt="time " className="w-[16px] h-[16px]" />
                  <h3 className="text-[15px] mr-[20px]">7:00 مساءا</h3>
                </div>
                <div className="location flex mt-[5px] mx-[32px] items-center">
                  <div className="h-[150%] w-[2px] bg-gray-400  ml-[10px]"></div>
                  <img
                    src={location}
                    alt="location"
                    className="w-[12px] h-[16px]"
                  />
                  <h3 className="text-[15px] mr-[20px]">روما، ايطاليا</h3>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="headerFooter mb-[10px]">
                <h3 className="text-[24px] font-[500][">الوصف</h3>
              </div>
              <div className="botFooter w-[580px] h-[62px] overflow-auto ssc">
                <p className="text-[13px]">
                  حفلة تخرج لخريجي كلية الآداب جامعة المنصورة دفعة 2023 ,يشمل
                  الحفلة استعراضات فنية وأداء موسيقي حي باستخدام فرقة موسيقية أو
                  فنانين محليين ليضيفوا جواً من الحيوية والاحتفال إلى الحفلة .
                  حفلة تخرج لخريجي كلية الآداب جامعة المنصورة دفعة 2023 ,يشمل
                  الحفلة استعراضات فنية وأداء موسيقي حي باستخدام فرقة موسيقية أو
                  فنانين محليين ليضيفوا جواً من الحيوية والاحتفال إلى الحفلة .
                  حفلة تخرج لخريجي كلية الآداب جامعة المنصورة دفعة 2023 ,يشمل
                  الحفلة استعراضات فنية وأداء موسيقي حي باستخدام فرقة موسيقية أو
                  فنانين محليين ليضيفوا جواً من الحيوية والاحتفال إلى الحفلة .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="party overflow-auto w-full ssc ">
          <div className="img mt-[24px] w-full overflow-hidden">
            <h3 className="text-[24px] font-bold">الصور</h3>
            <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto mt-[20px] mb-[72px]">
              <h3 className="text-[20px]">لم تقام الحفلة بعد</h3>
            </div>
          </div>
          <div className="video mt-[24px] w-full overflow-hidden">
            <h3 className="text-[24px] font-bold">الفيديو</h3>
            <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto my-[20px]">
              <h3 className="text-[20px]">لم تقام الحفلة بعد</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNewEventDetails;
