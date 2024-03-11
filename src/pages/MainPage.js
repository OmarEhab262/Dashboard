import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import search from "../assists/icon/search.png";
import count from "../assists/icon/count.png";
import chair from "../assists/icon/chair.png";
import party from "../assists/icon/party.png";
import "../../src/index.css";

const MainPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [typeTickets, setTypeTickets] = useState([]);
  const [newTickets, setNewTickets] = useState([]);
  const [oldTickets, setOldTickets] = useState([]);
  const [showComingParties, setShowComingParties] = useState(false);
  const [showOldParties, setShowOldParties] = useState(false);

  useEffect(() => {
    fetch("https://api.npoint.io/d48ff926687cfab85dde")
      .then((response) => response.json())
      .then((data) => setTypeTickets(data))
      .catch((error) => console.error("Error fetching old data:", error));

    fetch("https://api.npoint.io/a02d1c3cc488817931a6")
      .then((response) => response.json())
      .then((data) => {
        const upcoming = data.filter((party) => party.status === "upcoming");
        setNewTickets(upcoming);
      })
      .catch((error) => console.error("Error fetching new data:", error));

    fetch("https://api.npoint.io/a02d1c3cc488817931a6")
      .then((response) => response.json())
      .then((data) => {
        const ended = data.filter((party) => party.status === "ended");
        setOldTickets(ended);
      })
      .catch((error) => console.error("Error fetching old data:", error));
  }, []); // Empty dependency array ensures the effect runs only once

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Searching for:", searchInput);
  };
  const showNewParties = () => {
    setShowComingParties((prevShow) => !prevShow);
  };
  const showlastParties = () => {
    setShowOldParties((prevShow) => !prevShow);
  };

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh]">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات
          </h3>
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
        <div className=" flex w-[100%] justify-between mt-[30px] mb-[20px]">
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[330px] h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={count} alt="count" />
            </div>
            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد المستخدمين
              </h3>
              <h3 className="text-[12px]">100000 مستخدم</h3>
            </div>
          </div>
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[330px] h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={chair} alt="chair" />
            </div>
            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد الحجوزات
              </h3>
              <h3 className="text-[12px]">100000 حجز</h3>
            </div>
          </div>
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[330px] h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={party} alt="party" />
            </div>
            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد الحفلات
              </h3>
              <h3 className="text-[12px]">60 حفلة</h3>
            </div>
          </div>
        </div>
        <div className="overflow-auto w-[100%]  ssc">
          <div
            className="upcomingConcerts flex bg-white rounded-[16px]  p-[24px] w-[100%] flex-col  "
            style={{
              boxShadow: "0px  4px 4px rgba(0, 0, 0, 0.25)",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none", // Hide scrollbar on Edge and IE
              WebkitScrollbarWidth: "auto", // Set scrollbar width to auto
              WebkitScrollbarColor: "transparent transparent", // Set scrollbar color to transparent
            }}
          >
            <div className="head flex justify-between w-full items-center mb-[10px]  ">
              <h3 className="text-[20px] font-bold text-[#041361c2]">
                الحفلات القادمة
              </h3>
              <div className="relative">
                <h3
                  className="text-[20px] font-bold text-[#041361c2] cursor-pointer "
                  onClick={showNewParties}
                >
                  ...
                </h3>
                <div
                  className="absolute top-[40px] left-0 w-[128px] h-[112px] border-solid border-[3px] border-[#041361c2] rounded-[16px] bg-white  "
                  style={{ display: showComingParties ? "block" : "none" }}
                >
                  <div className="flex flex-col justify-center items-center h-full">
                    <h3 className="h-[50%] flex justify-center items-center">
                      عرض الكل
                    </h3>
                    <div className="w-full h-[3px] bg-[#041361c2]"></div>
                    <h3 className="h-[50%] flex justify-center items-center">
                      إضـافـة
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="parties flex items-start overflow-x-auto my-[10px]"
              style={{
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none", // Hide scrollbar on Edge and IE
                WebkitScrollbarWidth: "auto", // Set scrollbar width to auto
                WebkitScrollbarColor: "transparent transparent", // Set scrollbar color to transparent
              }}
            >
              {newTickets.map((party) => (
                <div
                  key={party.id}
                  className="party rounded-[12px] border-solid border-[1px] border-gray-400 p-[20px] flex justify-start items-center flex-col h-[200px] ml-[20px] mb-[10px] "
                >
                  <div className="date bg-[#0413614d] w-[200px] items-center flex justify-center py-[5px] rounded-[24px] mb-[5px] h-[40px]">
                    <h3 className="text-[#041461] text-[14px] font-bold">
                      {party.date}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="name text-[#041361a8] text-[14px] font-bold text-center h-[50px]">
                      {party.name}
                    </h3>
                    <h4 className="time text-[12px] text-gray-500 mb-[10px] mt-[20px]">
                      {party.time}
                    </h4>
                  </div>
                  <div className="users self-end ml-[25px]">
                    <div className="users flex">
                      {party.users.map((user, index) => (
                        <img
                          key={index}
                          src={user}
                          alt={`user${index}`}
                          className="ml-[-10px] w-[24px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="upcomingConcerts flex bg-white rounded-[16px] p-[24px]  flex-col  my-[20px] w-full overflow-hidden "
            style={{
              boxShadow: "0px  4px 4px rgba(0, 0, 0, 0.25)",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none", // Hide scrollbar on Edge and IE
              WebkitScrollbarWidth: "auto", // Set scrollbar width to auto
              WebkitScrollbarColor: "transparent transparent", // Set scrollbar color to transparent
            }}
          >
            <div className="head flex justify-between items-center mb-[10px] ">
              <h3 className="text-[20px] font-bold text-[#041361c2]">
                الحفلات المنتهيه
              </h3>

              <div className="relative">
                <h3
                  className="text-[20px] font-bold text-[#041361c2] cursor-pointer "
                  onClick={showlastParties}
                >
                  ...
                </h3>
                <div
                  className="absolute top-[40px] left-0 w-[128px] h-[112px] border-solid border-[3px] border-[#041361c2] rounded-[16px] bg-white"
                  style={{ display: showOldParties ? "block" : "none" }}
                >
                  <div className="flex flex-col justify-center items-center h-full">
                    <h3 className="h-[50%] flex justify-center items-center">
                      عرض الكل
                    </h3>
                    <div className="w-full h-[3px] bg-[#041361c2]"></div>
                    <h3 className="h-[50%] flex justify-center items-center">
                      إضـافـة
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="parties flex items-start overflow-x-auto my-[10px]"
              style={{
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none", // Hide scrollbar on Edge and IE
                WebkitScrollbarWidth: "auto", // Set scrollbar width to auto
                WebkitScrollbarColor: "transparent transparent", // Set scrollbar color to transparent
              }}
            >
              {oldTickets.map((party) => (
                <div key={party.id} className="partyContainer ml-[70px]">
                  <div className="party border-solid border-[1px] border-gray-400 rounded-[18px] ml-[10px] w-[260px] h-[240px] mb-[10px]">
                    <div className="img">
                      <img
                        src={party.mainImg}
                        alt="MainPage"
                        className="mainImg w-[105%] h-[125px] rounded-tl-[16px] rounded-tr-[16px]"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 justify-items-center items-center p-[5px]">
                      <div className="content flex flex-col justify-center items-center ">
                        <h3 className="name text-[14px] text-[#041361a8] font-bold my-[5px] text-center h-[40px]">
                          {party.name}
                        </h3>
                      </div>
                      <h4 className="timeAndDate text-[12px] text-[#838389] mt-[10px]  ">
                        {party.date}, {party.time}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
