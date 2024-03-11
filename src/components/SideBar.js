import React, { useEffect, useState } from "react";
import logo from "../assists/imgs/logo.png";
import home from "../assists/icon/home.png";
import bhome from "../assists/icon/bhome.png";
import users from "../assists/icon/users.png";
import busers from "../assists/icon/busers.png";
import classification from "../assists/icon/classification.png";
import bclassification from "../assists/icon/bclassification.png";
import reservations from "../assists/icon/reservations.png";
import breservations from "../assists/icon/breservations.png";
import parties from "../assists/icon/parties.png";
import bparties from "../assists/icon/bparties.png";
import user1 from "../assists/imgs/userm.png";
import { Link, useLocation } from "react-router-dom";
import down from "../assists/icon/down.png";
import warrow from "../assists/icon/warrow.png";
const SideBar = ({ activeItemProp }) => {
  const [activeItem, setActiveItem] = useState(""); // Initialize with an empty string
  const [isRotated, setIsRotated] = useState(false);
  const [show, setShow] = useState(false);
  const [activeParty, setActiveParty] = useState(false);
  const location = useLocation();
  const goToUserpage = () => {
    window.location.href = "/Dashboard/#/User";
  };
  useEffect(() => {
    // Update activeItem based on the activeItemProp whenever the prop changes
    setActiveItem(activeItemProp);
  }, [activeItemProp]);

  useEffect(() => {
    // Set activeItem based on the current location pathname
    const pathname = location.pathname;
    if (pathname === "/MainPage") {
      setActiveItem("home");
    }
    if (pathname === "/Dashboard/#/MainPage") {
      setActiveItem("home");
    } else if (pathname === "/Users") {
      setActiveItem("users");
    } else if (pathname === "/Classification") {
      setActiveItem("classification");
    }
    if (location.pathname.endsWith("/ShowParties")) {
      setActiveItem("reservations");
    }
    if (location.pathname.endsWith("/Booking")) {
      setActiveItem("reservations");
    } else if (pathname === "/Reservations") {
      setActiveItem("reservations");
    } else if (pathname === "/EndedEvents") {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith("/NewEvents")) {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith("/ShowEndedEventDetail")) {
      setActiveItem("endedEvents");
    }
    if (location.pathname.endsWith("/EditEventDetail")) {
      setActiveItem("endedEvents");
    }
    if (location.pathname.endsWith("/ShowNewEventDetails")) {
      setActiveItem("endedEvents");
    }
    if (location.pathname.endsWith("/AddEvents")) {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith("/CreatedParty")) {
      setActiveItem("endedEvents");
    }
    // Add more conditions for other pages if needed
  }, [location.pathname]);
  const handleInputChange = () => {
    setIsRotated(!isRotated);
  };
  const handlePartyChange = () => {
    setActiveParty(true);
    setActiveItem("");
    setShow(!show);
  };
  return (
    <div className="col-span-1 min-h-screen ">
      <div className="logo   flex justify-center items-center h-[20vh]">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] self-end pl-[20px] mt-[50px] ml-[-30px] mb-[15px]"
        />
      </div>
      <div className="nav flex flex-col h-[65vh]">
        <Link
          to="/MainPage"
          className={`${
            activeItem === "home"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex items-center cursor-pointer">
            <img
              src={activeItem === "home" ? bhome : home}
              alt="home"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "home" ? "text-[#041461]" : "text-[#838389]"
              }`}
            >
              الصفحة الرئيسية
            </h3>
          </div>
          {activeItem === "home" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        <Link
          to="/Users"
          className={`${
            activeItem === "users"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex cursor-pointer ">
            <img
              src={activeItem === "users" ? busers : users}
              alt="users"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "users" ? "text-[#041461]" : "text-[#838389]"
              }`}
            >
              المستخدمين
            </h3>
          </div>
          {activeItem === "users" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        <Link
          to="/Classification"
          className={`${
            activeItem === "classification"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex cursor-pointer">
            <img
              src={
                activeItem === "classification"
                  ? bclassification
                  : classification
              }
              alt="classification"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "classification"
                  ? "text-[#041461]"
                  : "text-[#838389]"
              }`}
            >
              التصنيفات
            </h3>
          </div>
          {activeItem === "classification" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        <Link
          to="/Reservations"
          className={`${
            activeItem === "reservations"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex cursor-pointer">
            <img
              src={activeItem === "reservations" ? breservations : reservations}
              alt="reservations"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "reservations"
                  ? "text-[#041461]"
                  : "text-[#838389]"
              }`}
            >
              الحجوزات
            </h3>
          </div>
          {activeItem === "reservations" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        <div
          //   to="/EndedEvents"
          onClick={() => {
            handleInputChange();
            handlePartyChange();
          }}
          className={`${
            activeParty === true ||
            activeItem === "newEvents" ||
            activeItem === "AddEvents"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px] "
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px] "
          }`}
        >
          <div className="flex cursor-pointer justify-between items-center">
            <div className="flex justify-center items-center ">
              {" "}
              <img
                src={
                  activeParty === true ||
                  activeItem === "newEvents" ||
                  activeItem === "AddEvents"
                    ? bparties
                    : parties
                }
                alt="parties"
                className="ml-[16px]"
              />
              <h3
                className={`font-[700] ${
                  activeParty ||
                  activeItem === "newEvents" ||
                  activeItem === "AddEvents"
                    ? "text-[#041461]"
                    : "text-[#838389]"
                }`}
              >
                {activeItem === "newEvents" ? "عرض" : "الحفلات"}
              </h3>
            </div>
            <div className="w-[30px]">
              {" "}
              <img
                src={
                  activeParty ||
                  activeItem === "newEvents" ||
                  activeItem === "AddEvents"
                    ? down
                    : warrow
                }
                alt=""
                className={`transition-transform transform ${
                  isRotated ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {activeParty === true && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </div>
        <div
          className={`ease-in duration-300 ${
            show ? "show" : "hidden"
          } w-[70%] self-end relative mt-[15px] bg-white rounded-[24px] h-[125px] ml-[20px] text-[#041461] font-[700] text-[16px] overflow-hidden`}
        >
          <Link
            className="up h-[50%] border-b-2 flex justify-center items-center border-[#041461] cursor-pointer hover:bg-gray-300"
            to="/NewEvents"
          >
            <h3>عرض</h3>
          </Link>
          <Link
            className="down h-[50%] border-t-2 flex justify-center items-center border-[#041461] cursor-pointer  hover:bg-gray-300"
            to="/AddEvents"
          >
            <h3>إضافة</h3>
          </Link>
        </div>
      </div>
      <div className="user flex justify-center items-center flex-col w-full  h-[15vh]">
        <div className="line w-[70%] bg-white h-[1px]"></div>
        <div className="content flex items-center mt-[20px]">
          <div className="img w-[64px] cursor-pointer" onClick={goToUserpage}>
            <img src={user1} alt="user1" className="w-full" />
          </div>
          <div className="info mr-[20px] ">
            <h3 className="text-[16px] font-bold text-white mb-[5px]">
              محمد لطفى
            </h3>
            <h4 className="text-[12px] text-gray-500">ml12345@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
