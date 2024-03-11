import React, { useState } from "react";
import SideBar from "../components/SideBar";
import count from "../assists/icon/count.png";
import chair from "../assists/icon/chair.png";
import partys from "../assists/imgs/party.png";
import party from "../assists/icon/party.png";
import date2 from "../assists/icon/date2.png";
import location2 from "../assists/icon/location2.png";
import time2 from "../assists/icon/time2.png";

const EditEventDetail = () => {
  const [nameParty, setNameParty] = useState("حفلة فان داى كلية علوم");
  const [locationParty, setLocationParty] = useState("روما، ايطاليا");
  const [dateParty, setDateParty] = useState("اﻷثنين، 16 اغسطس 2024");
  const [timeParty, setTimeParty] = useState("7:00 مساءا");
  const [descriptionParty, setDescriptionParty] = useState(
    "حفلة تخرج لخريجي كلية الآداب جامعة المنصورة دفعة  2023 ,يشمل الحفلة استعراضات فنية وأداء موسيقي حي باستخدام فرقة موسيقية أو فنانين محليين ليضيفوا جواً من الحيوية والاحتفال إلى الحفلة ."
  );
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [removeClicked, setRemoveClicked] = useState(false);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const handleVideoUpload = (event) => {
    const uploadedVideos = Array.from(event.target.files);
    setVideos((prevVideos) => [...prevVideos, ...uploadedVideos]);
  };

  const handleRemoveImageClick = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleRemoveVideoClick = (indexToRemove) => {
    setVideos((prevVideos) =>
      prevVideos.filter((_, index) => index !== indexToRemove)
    );
  };
  const handleNamePartyChange = (event) => {
    setNameParty(event.target.value);
  };

  const handleLocationPartyChange = (event) => {
    setLocationParty(event.target.value);
  };

  const handleDatePartyChange = (event) => {
    setDateParty(event.target.value);
  };

  const handleTimePartyChange = (event) => {
    setTimeParty(event.target.value);
  };

  const handleDescriptionPartyChange = (event) => {
    setDescriptionParty(event.target.value);
  };

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات /
            <span className="text-[22px]"> فان داى كلية علوم</span>
          </h3>
        </div>
        <div className=" overflow-auto ssc pl-[24px]">
          <div className=" flex w-[100%] justify-between mt-[30px] mb-[20px]">
            <div
              className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[300px] h-[70px] border border-[#0413616b]"
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
              className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[300px] h-[70px] border border-[#0413616b]"
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
              className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[300px] h-[70px] border border-[#0413616b]"
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
          <div className="h-[245px] grid w-full grid-cols-3 gap-[30px]">
            <div className="img h-full  col-span-1 ">
              <img src={partys} alt="party" className="h-full w-full" />
            </div>
            <div className="content  col-span-2  ">
              <div className="one flex justify-between pr-[15px] mb-[24px]">
                <div className="w-[261px] nameParty">
                  <h3 className="text-[#29346c] text-[16px]">اسم الحفلة</h3>
                  <input
                    className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 border-b-2 py-[5px] bg-transparent "
                    value={nameParty}
                    onChange={handleNamePartyChange}
                  />
                </div>
                <div className="w-[261px] locationParty">
                  <h3 className="text-[#29346c] text-[16px] flex items-center">
                    مكان الحفلة
                  </h3>
                  <div className="flex items-center border-b-2 ">
                    <div className="ml-[5px]">
                      <img src={location2} alt="location" />{" "}
                    </div>
                    <input
                      className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 py-[5px] bg-transparent "
                      value={locationParty}
                      onChange={handleLocationPartyChange}
                    />
                  </div>
                </div>
              </div>
              <div className="two flex justify-between pr-[15px] mb-[24px]">
                <div className="w-[261px] dateParty">
                  <h3 className="text-[#29346c] text-[16px]">تاريخ الحفلة</h3>
                  <div className="flex items-center border-b-2 ">
                    <div className="ml-[5px]">
                      <img src={date2} alt="date2" />{" "}
                    </div>
                    <input
                      className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 py-[5px] bg-transparent "
                      value={dateParty}
                      onChange={handleDatePartyChange}
                    />
                  </div>
                </div>
                <div className="w-[261px] timeParty">
                  <h3 className="text-[#29346c] text-[16px] flex items-center">
                    وقت الحفلة
                  </h3>
                  <div className="flex items-center border-b-2 ">
                    <div className="ml-[5px]">
                      <img src={time2} alt="time2" />{" "}
                    </div>
                    <input
                      className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 py-[5px] bg-transparent "
                      value={timeParty}
                      onChange={handleTimePartyChange}
                    />
                  </div>
                </div>
              </div>
              <div className="three flex pr-[15px] items-center">
                <h3 className="text-[#29346c] text-[16px] ml-[24px]">
                  تاريخ الحفلة
                </h3>

                <textarea
                  id="description"
                  name="description"
                  value={descriptionParty}
                  className="text-[#041461]  font-bold w-[400px] outline-0 py-[5px] bg-transparent h-[80px] ssc text-[12px]"
                  style={{ resize: " none" }}
                  onChange={handleDescriptionPartyChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="img mt-[24px] w-full overflow-hidden">
              <h3 className="text-[24px] font-bold">الصور</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`img-${index}`}
                    className={`w-[224px] h-[144px] object-cover ml-[18px] block relative ${
                      removeClicked ? "hover:opacity-50" : ""
                    }`}
                    onClick={() => {
                      if (removeClicked) {
                        handleRemoveImageClick(index);
                      }
                    }}
                  />
                ))}
              </div>
              <div className="operationImgs flex justify-center items-center">
                <label
                  htmlFor="uploadImage"
                  className="add cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px]"
                >
                  <h3>اضافة صورة</h3>
                  <input
                    type="file"
                    id="uploadImage"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </label>
                <div
                  className="remove cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px]"
                  onClick={() => setRemoveClicked(!removeClicked)}
                >
                  <h3>حذف صورة</h3>
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <div className="video  w-full overflow-hidden mb-[70px]">
              <h3 className="text-[24px] font-bold">الفيديو</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                {videos.map((video, index) => (
                  <video
                    key={index}
                    src={URL.createObjectURL(video)}
                    className="w-[224px] h-[144px] object-cover ml-[18px] block"
                    controls
                    onClick={() => {
                      if (removeClicked) {
                        handleRemoveVideoClick(index);
                      }
                    }}
                  />
                ))}
              </div>
              <div className="operationVideo flex justify-center items-center">
                <label
                  htmlFor="uploadVideo"
                  className="add cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px]"
                >
                  <h3>اضافة فيديو</h3>
                  <input
                    type="file"
                    id="uploadVideo"
                    accept="video/*"
                    style={{ display: "none" }}
                    onChange={handleVideoUpload}
                  />
                </label>
                <div
                  className="remove cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px]"
                  onClick={() => setRemoveClicked(!removeClicked)}
                >
                  <h3>حذف فيديو</h3>
                </div>
              </div>
            </div>
            <div className="footer mt-[5px] mb-[5px] fixed bottom-[5%] bg-[#f9f9ff] w-[71.5%]">
              <div className="flex justify-center items-center">
                <div className="operationVideo flex justify-center items-center">
                  <div className="add w-[244px]  cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px] hover:opacity-90">
                    <h3>حفظ</h3>
                  </div>
                  <div className="remove w-[244px] cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px] hover:opacity-90">
                    <h3>الغاء</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEventDetail;
