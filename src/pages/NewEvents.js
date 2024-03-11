import React, { useState } from "react";
import SideBar from "../components/SideBar";
import search from "../assists/icon/search.png";
import date from "../assists/icon/date.png";
import location from "../assists/icon/location.png";
import time from "../assists/icon/time.png";
import party3 from "../assists/imgs/party3.png";
import "../../src/index.css";
import { Link } from "react-router-dom";

const NewEvents = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Searching for:", searchInput);
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">الإيفنتات</span>
          </h3>
          <div className="w-[70%] flex justify-end ">
            <Link
              to="/AddEvents"
              className="w-[155px] h-[50px] rounded-[16px] bg-[#041461] text-white font-bold text-[16px] flex justify-center items-center ml-[30px]"
            >
              <h3>اضافة حفلة</h3>
              <h3 className="text-[50px] font-thin mt-[-10px] mr-[15px]">+</h3>
            </Link>
            <form
              onSubmit={handleSearch}
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
                placeholder="ابحث في لوحة معلوماتك"
              />
            </form>
          </div>
        </div>
        <div className="events flex justify-center items-center w-full mt-[30px] font-bold">
          <div
            className="coming w-[20%] h-[60px] bg-[#041461] rounded-[16px] flex justify-center items-center m-[20px]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <Link
              to="/NewEvents"
              className="text-white text-[18px] cursor-pointer"
            >
              حفلات قادمة
            </Link>
          </div>
          <div
            className="coming w-[20%] h-[60px] bg-white rounded-[16px] flex justify-center items-center m-[20px]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <Link
              to="/EndedEvents"
              className="text-[#041461] text-[18px] cursor-pointer"
            >
              حفلات منتهية
            </Link>
          </div>
        </div>
        <div className="content w-full overflow-auto ssc flex flex-col items-center">
          <div
            className="funDay flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات فان داى</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            فان داى كلية علوم
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="funDay flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>بازار</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            بازار
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="stand flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>ستاند اب</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            بازار
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="Graduation flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات تخرج</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            بازار
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="Singing flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات غناء</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            بازار
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="Singing flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات غناء</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            بازار
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="conferences flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>مؤتمرات</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mr-[20px]"
                  >
                    <div className="w-full">
                      <img
                        src={party3}
                        alt="party3"
                        className="w-full h-[125px]"
                      />
                      <div className="content">
                        <div className="head flex justify-center mt-[5px]">
                          <h3 className="text-[#041461] text-[16px] font-bold">
                            بازار
                          </h3>
                        </div>
                        <div className="info pr-[8px]">
                          <div className="date flex mt-[5px]">
                            <img src={date} alt="date" />
                            <h3 className="text-[12px] mr-[10px]">
                              اﻷثنين، 16 اغسطس 2024
                            </h3>
                          </div>
                          <div className="location flex mt-[5px]">
                            <img src={location} alt="location " />
                            <h3 className="text-[12px] mr-[10px]">
                              روما، ايطاليا
                            </h3>
                          </div>
                          <div className="time flex mt-[5px]">
                            <img src={time} alt="time " />
                            <h3 className="text-[12px] mr-[10px]">
                              7:00 مساءا
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewEvents;
