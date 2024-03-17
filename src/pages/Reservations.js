import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Using useNavigate hook
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://causal-eternal-ladybird.ngrok-free.app/api/categories",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setData(response.data.data);
        // console.log(response.data); // Log entire response data
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchData();
  }, []);

  const navigateToParty = (item) => {
    navigate("/ShowParties", {
      replace: true,
      state: { name: item.name, id: item.id },
    });
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[15px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">الحجوزات</span>
          </h3>
        </div>
        <div className="overflow-auto ssc w-full flex justify-center items-center h-[93%]">
          <div className="container flex justify-center mt-[15px]">
            <div className="grid grid-cols-3 grid-rows-2 gap-[55px] mt-[20px]">
              {data &&
                data.map((item) => (
                  <div
                    key={item.id}
                    className="box h-[300px] w-[206px] flex flex-col justify-between items-center cursor-pointer"
                    onClick={() => navigateToParty(item)}
                  >
                    <div
                      className="head h-[54px] rounded-[10px] flex justify-center items-center w-full my-[10px] border border-[#0413616b]"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.26)",
                      }}
                    >
                      <h3 className="text-[#041461] text-[18px] font-[500] ">
                        {item.name}
                      </h3>
                    </div>
                    <div className="mid w-[200px] h-[200px] border border-[#041461] rounded-[10px] flex justify-center items-center my-[10px]">
                      <img
                        src={`https://causal-eternal-ladybird.ngrok-free.app/storage/${item.image}`}
                        alt={item.name}
                        className="w-full h-[200px]"
                      />
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

export default Reservations;
