import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import search from "../assists/icon/search.png";
import date from "../assists/icon/date.png";
import locationIcon from "../assists/icon/location.png";
import time from "../assists/icon/time.png";
import { useLocation, useNavigate } from "react-router";

const ShowParties = () => {
  const location = useLocation();
  const [parties, setParties] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const nameFilter = location.state.name;
  const idFilter = location.state.id;
  const navigate = useNavigate(); // Using useNavigate hook

  useEffect(() => {
    axios
      .get("https://api.npoint.io/bd48efeb2ee7716143c2")
      .then((response) => {
        console.log("API Response:", response.data);
        setParties(response.data[idFilter - 2].parties);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  console.log("Name Filter:", nameFilter);
  console.log("id Filter:", idFilter - 2);

  const goToUsers = (party) => {
    navigate("/Booking", { replace: true, state: { party, name: nameFilter } });
  };
  const filteredParties = parties.filter(
    (party) => party.type_party === nameFilter
  );
  console.log("Filtered Parties Length:", filteredParties.length);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
    // Implement search logic here if needed
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات /
            <span className="text-[20px]">الحجوزات/ {nameFilter}</span>
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
              placeholder="ابحث في الحجوزات"
            />
          </form>
        </div>

        <div className="title w-[270px] h-[75px] rounded-[20px] text-white font-bold bg-[#041461]  flex justify-center items-center text-[22px] mx-auto mt-[50px]">
          <h3>{nameFilter}</h3>
        </div>

        <div
          className="content border border-[px] w-full h-[70vh] mt-[40px] overflow-auto rounded-[16px] p-[20px]  gap-[0px] ssc grid grid-cols-3"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            filteredParties.map((party, index) => (
              <div
                key={index}
                className="box w-[256px] h-[232px] rounded-[16px] border border-[2px] mx-auto mt-[20px] cursor-pointer"
                onClick={() => goToUsers(party)}
              >
                <div className="w-full">
                  <img
                    src={party.img_party}
                    alt="party"
                    className="w-full h-[125px]"
                  />
                  <div className="content">
                    <div className="title flex justify-center mt-[5px]">
                      <h3 className="text-[#041461] text-[16px] font-bold">
                        {party.name_party}
                      </h3>
                    </div>
                    <div className="info pr-[8px]">
                      <div className="date flex mt-[5px]">
                        <img src={date} alt="date" />
                        <h3 className="text-[12px] mr-[10px]">
                          {party.date_party}
                        </h3>
                      </div>
                      <div className="location flex mt-[5px]">
                        <img src={locationIcon} alt="location" />
                        <h3 className="text-[12px] mr-[10px]">
                          {party.location_party}
                        </h3>
                      </div>
                      <div className="time flex mt-[5px]">
                        <img src={time} alt="time" />
                        <h3 className="text-[12px] mr-[10px]">
                          {party.time_party}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowParties;
