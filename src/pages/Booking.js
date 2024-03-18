import React, { useState, useEffect } from "react";
import axios from "axios";
import search from "../assists/icon/search.png";
import SideBar from "../components/SideBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import arrow from "../assists/icon/arrow.png";
const Booking = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [idUsers, setIdUsers] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const idFilter = location.state.idFilter;
  const [searchResults, setSearchResults] = useState([]);
  localStorage.setItem("idFilter", idFilter);
  const goBack = () => {
    window.history.back();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);

    // Filter data based on nameEN property
    const filteredData = data.filter((user) => {
      if (user && user.nameEN) {
        return user.nameEN.includes(searchInput);
      }
      return false;
    });

    setSearchResults(filteredData);
    console.log("hhh" + searchResults);
  };

  const handleUser = (gg) => {
    setIdUsers(gg.user_id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://causal-eternal-ladybird.ngrok-free.app/api/users/${idUsers}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setUserData(response.data.data[0]);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [idUsers, token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://causal-eternal-ladybird.ngrok-free.app/api/event_bookings?event_id=${idFilter}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setData(response.data.bookings);
        console.log(response.data.bookings);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchData();
  }, [idFilter, token]);

  console.log(idFilter);
  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <button onClick={goBack} className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </button>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات/{" "}
              <span className="text-[20px]">
                <span>الحجوزات /</span>
                <span>الحجوزات</span>
              </span>{" "}
            </h3>
          </div>
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
              placeholder="ابحث عن المستخدمين"
            />
          </form>
        </div>
        <div
          className="countUsers w-[225px] h-[70px] rounded-[16px]  flex justify-center items-center my-[20px] py-[15px] border border-[#0413616b]"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <h3 className="font-bold text-[16px] text-[#041461]">
            عدد المستخدمين : <span>{data.length}</span>
          </h3>
        </div>
        <div className="w-full ">
          <div className="headerInfo text-[18px] text-[#041461] font-bold grid grid-cols-4 items-center w-[85%] my-[10px]  justify-items-center ">
            <h3 className=" "></h3>
            <h3 className=" ">عدد التذاكر</h3>
            <h3 className="">الحفلة</h3>
            <h3 className="">المبلغ</h3>
          </div>
          <div className="overflow-auto h-[67vh] ssc">
            {(searchInput && searchResults.length > 0
              ? searchResults
              : data
            ).map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center w-full"
                onClick={() => handleUser(userData && userData.nameEN)}
              >
                <div className="info text-[15px] text-[#041461] font-bold items-center w-[85%] my-[10px] bg-[#727db5ab] rounded-[24px] grid grid-cols-4 py-[15px] justify-items-start">
                  <div className="flex pr-[20px] col-span-1">
                    <img
                      src={`https://causal-eternal-ladybird.ngrok-free.app/storage/${
                        userData && userData.image
                      }`}
                      alt="user"
                      className="image_user w-[50px] h-[50px] rounded-full text-center"
                    />
                    <div className="flex flex-col items-start mr-[20px]">
                      <h3 className="name_user">
                        {userData && userData.nameEN}
                      </h3>{" "}
                      <h3 className="email_user text-[12px]">
                        {" "}
                        {userData && userData.email}
                      </h3>
                    </div>
                  </div>
                  <h3 className="numberOfCompanions_user col-span-1 justify-self-center">
                    {user.tickets_number}
                  </h3>
                  <h3 className="party_user col-span-1 justify-self-center">
                    {user.event.title}
                  </h3>
                  <h3 className="cost_user col-span-1 justify-self-center">
                    {user.total_price}
                  </h3>
                </div>

                <Link
                  to="/ShowTicket"
                  className="w-[130px] h-[50px] flex justify-center items-center bg-[#041461] rounded-[10px] text-white mx-[10px] cursor-pointer"
                >
                  عرض التذاكر
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
