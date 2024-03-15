import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import down from "../assists/icon/down.png";
import arrow from "../assists/icon/arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";

const AddEvents = () => {
  const [partyName, setPartyName] = useState("");
  const [date, setDate] = useState("");
  const [governorate, setGovernorate] = useState([]);
  const [place, setPlace] = useState("");
  const [type, setType] = useState(null);
  const [band, setBand] = useState("");
  const [isRotated, setIsRotated] = useState(false);
  const [isRotatedT, setIsRotatedT] = useState(false);
  const [next, setNext] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [vipSeats, setVipSeats] = useState("");
  const [plusSeats, setPlusSeats] = useState("");
  const [vvipSeats, setVvipSeats] = useState("");
  const [ticketPricesVVIP, setTicketPricesVVIP] = useState("");
  const [ticketPricesPlus, setTicketPricesPlus] = useState("");
  const [ticketPricesVIP, setTicketPricesVIP] = useState("");
  const [accompanying, setAccompanying] = useState("");
  const [selectedOption, setSelectedOption] = useState("open");
  const [activeTab, setActiveTab] = useState(null);
  const [stand, setStand] = useState(false);
  const [status, setStatus] = useState(1);
  const [showGovernorate, setShowGovernorate] = useState("");
  const [numGovernorate, setNumGovernorate] = useState("");

  const handleStand = () => {
    setStand(true);
  };

  const handleInputChange = () => {
    setIsRotated(!isRotated);
  };
  const handleInputChangeT = () => {
    setIsRotatedT(!isRotatedT);
  };
  const handleNext = () => {
    console.log(numGovernorate);
    setNext(!next);
    if (type === "ستاند اب") {
      handleStand();
    } else {
      setStand(false);
    }
  };

  const handleClick = (tab) => {
    setActiveTab(tab); // Set the active tab
    setIsRotated(false);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    if (value === "open") {
      setStatus(1);
    } else {
      setStatus(0);
    }
  };
  const goBack = () => {
    window.history.back();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", partyName);
      formData.append("description", description);
      formData.append("attendants_price", accompanying);
      formData.append("status", status);
      formData.append("banner", image);
      formData.append("band", "كايروكي");
      formData.append("location", place);
      formData.append("date_time", date);
      formData.append("state_id", numGovernorate);

      const response = await axios.post(
        "https://causal-eternal-ladybird.ngrok-free.app/api/events",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart form data
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      console.log("Event created successfully:", response.data);
      // You can do something after successful creation if needed
    } catch (error) {
      console.error("Error creating event:", error.response.data);
    }
  };

  const goToCreatedParty = () => {
    fetchData();
    console.log(image);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://causal-eternal-ladybird.ngrok-free.app/api/states",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        console.log("Response data:", response.data); // Log response data

        setGovernorate(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div
          className={`header flex items-center w-[100%] h-[35px] mt-[5px] mb-[5px]
            ${next ? "hidden" : ""}`}
        >
          <img
            src={arrow}
            alt=""
            className="w-[27px] h-[27px] ml-[16px] cursor-pointer"
          />
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">إضافة حفلة</span>
          </h3>
        </div>
        <div
          className={`content grid grid-cols-2 w-full text-[#041461] mt-[30px] overflow-auto ssc overflow-x-hidden pl-[20px]  ${
            next ? "hidden" : ""
          } `}
        >
          <div className="nameParty col-span-2 flex w-full h-[80px] items-center mb-[20px]">
            <h3 className="text-[24px] font-[700] w-[200px] ml-[20px]">
              اسم الحفلة
            </h3>
            <input
              type="text"
              className="w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
              onChange={(e) => setPartyName(e.target.value)}
            />
          </div>
          <div className="dateParty  col-span-2 flex w-full h-[80px] items-center mb-[20px]">
            <h3 className="text-[24px] font-[700] w-[200px] ml-[20px]">
              التاريخ والوقت{" "}
            </h3>
            <input
              type="text"
              className="w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div
            className="categoryParty col-span-1 flex w-full h-[80px] items-center mt-[20px] mb-[10px] relative   cursor-pointer"
            onClick={handleInputChangeT}
          >
            <h3 className="text-[24px] font-[700]  w-[280px] ">المحافظة</h3>
            <img
              src={down}
              alt=""
              className={`absolute left-6 transition-transform transform ${
                isRotatedT ? "rotate-180" : ""
              }`}
            />
            <div className="w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] flex items-center pr-[24px]  ">
              {showGovernorate}
            </div>

            <div
              className={` absolute w-[67%] outline-0 border border-2  rounded-[8px] text-[20px]  h-[190px] overflow-auto  ssc  bg-[#F9F9FF]
  left-0 top-[100px] z-[1]
  ${isRotatedT ? "" : "hidden"}`}
            >
              {governorate.map((item) => (
                <h3
                  key={item.id}
                  className={`pr-[24px] py-[15px] rounded-[8px]  cursor-pointer ml-[5px]
       ${showGovernorate === item.state_name ? "bg-[#041461] text-white" : ""}`}
                  onClick={() => {
                    setShowGovernorate(item.state_name);
                    setNumGovernorate(item.id);
                  }}
                >
                  {item.state_name}
                </h3>
              ))}
            </div>
          </div>

          <div className="placeParty col-span-1 flex w-full h-[80px] items-center mt-[20px] mr-[20px] mb-[20px]">
            <h3 className="text-[24px] font-[700] w-[200px]">المكان</h3>
            <input
              type="text"
              className="w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px]  pr-[24px]"
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div
            className="categoryParty col-span-1 flex w-full h-[80px] items-center mt-[20px] mb-[10px] relative   cursor-pointer"
            onClick={handleInputChange}
          >
            <h3 className="text-[24px] font-[700]  w-[280px] ">الفئة</h3>
            <img
              src={down}
              alt=""
              className={`absolute left-6 transition-transform transform ${
                isRotated ? "rotate-180" : ""
              }`}
            />
            <div className="w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] flex items-center pr-[24px]  ">
              {type}
            </div>
          </div>

          <div className="bandParty col-span-1 flex w-full h-[80px] items-center mt-[20px] mr-[20px] mb-[10px]">
            <h3 className="text-[24px] font-[700] w-[200px]">الفرقة</h3>
            <input
              type="text"
              className="w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
              onChange={(e) => setBand(e.target.value)}
            />
          </div>
          <div className="bandParty col-span-1 w-[90%] h-[80px] items-center  mr-[185px] mb-[250px]  ">
            <div
              className={`w-[73%] outline-0 border border-2 bg-transparent rounded-[8px] text-[20px]  h-[190px] overflow-auto  ssc pl-[5px] ${
                isRotated ? "" : "hidden"
              }`}
            >
              <h3
                className={`pr-[24px] py-[15px] rounded-[8px]  cursor-pointer ${
                  activeTab === "standab" ? "bg-[#041461] text-white" : ""
                }`}
                onClick={() => {
                  handleClick("standab");
                  setType("ستاند اب");
                }}
              >
                ستاند اب
              </h3>
              <h3
                className={`px-[24px] py-[15px] rounded-[8px]  cursor-pointer ${
                  activeTab === "graduation" ? "bg-[#041461] text-white" : ""
                }`}
                onClick={() => {
                  handleClick("graduation");
                  setType("حفلات تخرج");
                }}
              >
                حفلات تخرج
              </h3>
              <h3
                className={`px-[24px] py-[15px] rounded-[8px]  cursor-pointer ${
                  activeTab === "funday" ? "bg-[#041461] text-white" : ""
                }`}
                onClick={() => {
                  handleClick("funday");
                  setType("فان داي");
                }}
              >
                فان داي
              </h3>
              <h3
                className={`px-[24px] py-[15px] rounded-[8px]  cursor-pointer ${
                  activeTab === "singing" ? "bg-[#041461] text-white" : ""
                }`}
                onClick={() => {
                  handleClick("singing");
                  setType("حفلات غناء");
                }}
              >
                حفلات غناء
              </h3>
              <h3
                className={`px-[24px] py-[15px] rounded-[8px]  cursor-pointer ${
                  activeTab === "bazaar" ? "bg-[#041461] text-white" : ""
                }`}
                onClick={() => {
                  handleClick("bazaar");
                  setType("بازار");
                }}
              >
                بازار
              </h3>
              <h3
                className={`px-[24px] py-[15px] rounded-[8px]  cursor-pointer ${
                  activeTab === "conferences" ? "bg-[#041461] text-white" : ""
                }`}
                onClick={() => {
                  handleClick("conferences");
                  setType("مؤتمرات");
                }}
              >
                مؤتمرات
              </h3>
            </div>
          </div>
        </div>
        <div
          className={`next flex justify-center items-center fixed bottom-[10%] right-[50%] w-[244px] h-[60px]
          rounded-[6px] bg-[#041461] text-white text-[20px] font-[700] cursor-pointer
          ${next ? "hidden" : ""}
          `}
          onClick={handleNext}
        >
          <h3>التالى</h3>
        </div>
        <div
          className={`secound w-full text-[#041461]
         ${next ? "" : "hidden"}
        `}
        >
          <div
            className={`header flex items-center w-[100%] h-[35px] mt-[20px] mb-[20px]`}
          >
            <img
              src={arrow}
              alt=""
              className="w-[27px] h-[27px] ml-[16px] cursor-pointer"
              onClick={handleNext}
            />
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات/ <span className="text-[20px]">إضافة حفلة</span>
            </h3>
          </div>
          <div className=" overflow-auto ssc  h-[75vh] pl-[15px]">
            <div className="descriptionParty col-span-2 flex w-full  h-[122px] items-center  mt-[20px] mb-[20px]  justify-between ">
              <h3 className="text-[24px] font-[700]  ml-[20px]">وصف الحفلة</h3>
              <input
                type="text"
                className="w-[80%] h-[122px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="addimg col-span-2 flex w-full  h-[80px] items-center mb-[20px]  justify-between">
              <h3 className="text-[24px] font-[700]  ml-[20px]">اضافة صورة</h3>
              <label
                className="w-[80%] h-[81px] outline-0 border bg-transparent rounded-[8px] text-[30px]    text-dodgerblue cursor-pointer"
                style={{
                  borderRadius: "3px",
                  padding: "0.5em",
                }}
              >
                <div className="border  border-gray-500  w-fit flex justify-center items-center px-[35px] rounded-[6px]">
                  {" "}
                  اختر من الملفات
                </div>

                <input
                  type="file"
                  id="imageInput"
                  style={{ display: "none" }}
                  className="hidden "
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div
              className={`Plus col-span-2 flex w-full h-[80px] items-center mt-[20px] mb-[20px] justify-between ${
                stand ? "" : "hidden"
              }`}
            >
              <h3 className="text-[24px] font-[700]  ml-[20px]">
                ارقام مقاعد Plus
              </h3>
              <input
                type="text"
                className="w-[80%] h-[81px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                onChange={(e) => setPlusSeats(e.target.value)}
              />
            </div>
            <div
              className={`Vip col-span-2 flex w-full  h-[80px] items-center  mt-[20px] mb-[20px]  justify-between ${
                stand ? "" : "hidden"
              }`}
            >
              <h3 className="text-[24px] font-[700]  ml-[20px]">
                ارقام مقاعد Vip
              </h3>
              <input
                type="text"
                className="w-[80%] h-[81px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                onChange={(e) => setVipSeats(e.target.value)}
              />
            </div>

            <div
              className={`VVip col-span-2 flex w-full  h-[80px] items-center mt-[20px] mb-[20px]  justify-between ${
                stand ? "" : "hidden"
              }`}
            >
              <h3 className="text-[24px] font-[700]  ml-[20px]">
                ارقام مقاعد VVip
              </h3>
              <input
                type="text"
                className="w-[80%] h-[81px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                onChange={(e) => setVvipSeats(e.target.value)}
              />
            </div>
            <div className="type col-span-2 flex w-full  h-[80px] items-center mb-[20px]  justify-between">
              <h3 className="text-[24px] font-[700]  ml-[20px]">حالة الحفلة</h3>
              <div className="w-[70%] h-[81px] bg-transparent rounded-[8px] text-[24px] flex justify-around items-center text-[#04146152] mx-auto">
                <label className="flex items-center cursor-pointer">
                  <span
                    className="ml-[20px]"
                    style={{
                      color:
                        selectedOption === "open" ? "#041461" : "#04146152",
                    }}
                  >
                    فتح الحجز
                  </span>
                  <input
                    style={{ width: "15px", height: "15px" }}
                    type="radio"
                    value="open"
                    checked={selectedOption === "open"}
                    onChange={() => handleOptionChange("open")}
                  />
                </label>
                <label className="flex items-center ml-4 cursor-pointer">
                  <span
                    className="ml-[20px]"
                    style={{
                      color:
                        selectedOption === "close" ? "#041461" : "#04146152",
                    }}
                  >
                    قفل الحجز
                  </span>
                  <input
                    style={{ width: "15px", height: "15px" }}
                    type="radio"
                    value="close"
                    checked={selectedOption === "close"}
                    onChange={() => handleOptionChange("close")}
                  />
                </label>
              </div>
            </div>
            <div className="flex ">
              <div
                className={`Plus col-span-2 flex w-full  h-[80px] items-center  mt-[20px] mb-[20px]  justify-between ${
                  stand ? "" : "hidden"
                }`}
              >
                <h3 className="w-[45%] text-[24px] font-[700] pl-[15px]">
                  اسعار تذاكر Plus
                </h3>
                <input
                  type="text"
                  className="w-[65%]  h-[81px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                  onChange={(e) => setTicketPricesPlus(e.target.value)}
                />
              </div>

              <div
                className={`VVip col-span-2 flex w-full  h-[80px] items-center  mt-[20px] mb-[20px]  justify-between  ${
                  stand ? "" : "hidden"
                }`}
              >
                <h3 className="w-[250px] text-[24px] font-[700] px-[15px]">
                  اسعار تذاكر VVip
                </h3>
                <input
                  type="text"
                  className="w-[65%] h-[81px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                  onChange={(e) => setTicketPricesVVIP(e.target.value)}
                />
              </div>
            </div>
            <div className="flex ">
              <div
                className={`Vip col-span-2 flex w-full  h-[80px] items-center  mt-[20px] mb-[20px]  justify-between  ${
                  stand ? "" : "hidden"
                }`}
              >
                <h3 className="w-[200px] text-[24px] font-[700] pl-[15px]">
                  اسعار تذاكر Vip
                </h3>
                <input
                  type="text"
                  className="w-[80%] h-[81px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                  onChange={(e) => setTicketPricesVIP(e.target.value)}
                />
              </div>
              <div
                className={`accompanying col-span-2 flex w-full  h-[80px] items-center  mt-[20px] mb-[20px]  justify-between ${
                  stand ? "hidden" : ""
                }`}
              >
                <h3 className="w-[250px] text-[24px] font-[700] px-[15px]">
                  سعر المرافق
                </h3>
                <input
                  type="text"
                  className={`${
                    stand
                      ? " w-[65%] h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                      : " w-full h-[80px] outline-0 border border-2 bg-transparent rounded-[8px] text-[30px] pr-[24px]"
                  }`}
                  onChange={(e) => setAccompanying(e.target.value)}
                />
              </div>
            </div>
            <div className="submit flex mx-auto w-[60%] justify-between  mt-[20px] mb-[20px]">
              <div
                className={`next flex justify-center items-center  w-[244px] h-[60px]  rounded-[6px] bg-[#041461] text-white text-[20px] font-[700] cursor-pointer `}
                onClick={goToCreatedParty}
              >
                <h3>انشاء حفلة</h3>
              </div>
              <div
                onClick={goBack}
                className={`next flex justify-center items-center  w-[244px] h-[60px]  rounded-[6px] bg-transparent text-[#041461] text-[20px] font-[700] cursor-pointer border border-[2px] border-[#041461]`}
              >
                <h3>الغاء</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
