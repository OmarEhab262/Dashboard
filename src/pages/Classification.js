import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import "../../src/index.css";

const Classification = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/3499a5d9ee6a5ea8b7d0"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[15px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">التصنيفات</span>
          </h3>
        </div>
        <div className="overflow-auto ssc w-full ">
          <div className="container flex justify-center mt-[15px]">
            <div className="grid grid-cols-3 grid-rows-2 gap-[55px]">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="box h-[358px] w-[206px] flex flex-col justify-between items-center"
                >
                  <div
                    className="head h-[54px] rounded-[10px] flex justify-center items-center w-full my-[10px] border border-[#0413616b]"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.26)" }}
                  >
                    <h3 className="text-[#041461] text-[18px] font-[500]">
                      {item.name}
                    </h3>
                  </div>
                  <div className="mid w-[200px] h-[200px] border border-[#041461] rounded-[10px] flex justify-center items-center my-[10px]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-[200px]"
                    />
                  </div>
                  <div className="edit w-[132px] h-[63px] bg-[#041461D9] rounded-[10px] flex justify-center items-center cursor-pointer my-[10px]">
                    <h3 className="text-[16px] font-[700] text-white">
                      تعديل الصورة
                    </h3>
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

export default Classification;
