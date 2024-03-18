import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import location2 from "../assists/icon/location2.png";
import arrow from "../assists/icon/arrow.png";
import axios from "axios";
const EditEventDetail = () => {
  const [nameParty, setNameParty] = useState("");
  const [locationParty, setLocationParty] = useState("");
  const [timeDate, setTimeDate] = useState("");

  const [descriptionParty, setDescriptionParty] = useState("");
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
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

  const handleNamePartyChange = (event) => {
    setNameParty(event.target.value);
  };

  const handleLocationPartyChange = (event) => {
    setLocationParty(event.target.value);
  };
  const handleDatePartyChange = (event) => {
    setTimeDate(event.target.value);
  };

  const handleDescriptionPartyChange = (event) => {
    setDescriptionParty(event.target.value);
  };
  const goBack = () => {
    window.history.back();
  };

  const storedId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://causal-eternal-ladybird.ngrok-free.app/api/event-show/${storedId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        setNameParty(response.data.event.title);
        setLocationParty(response.data.event.location);
        setTimeDate(response.data.event.date_time);
        setDescriptionParty(response.data.event.description);
        setMainImage(response.data.event.banner);
        setImages(response.data.images);
        setVideos(response.data.event.video);
        // setImages(response.data.event.video);
        setImages(response.data.images);
        // Parse and update timeParty and dateParty
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [storedId, token]);

  const handleSaveData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", nameParty);
      formData.append("location", locationParty);
      formData.append("description", descriptionParty); // Append the image blob
      formData.append("date_time", timeDate); // Append the image blob
      formData.append("images", images); // Append the image blob

      const response = await axios.post(
        `https://causal-eternal-ladybird.ngrok-free.app/api/events/update/${storedId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log("data updated:", response.data);
      console.log(descriptionParty);
      // You can do something after successful update if needed
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <button onClick={goBack} className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </button>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات /
              <span className="text-[22px]"> فان داى كلية علوم</span>
            </h3>
          </div>
        </div>
        <div className=" overflow-auto ssc pl-[24px] mt-[20px] w-full">
          <div className="h-[250px] grid w-full grid-cols-3 gap-[30px]">
            <div className="img h-[231px] col-span-1">
              <img
                src={`https://causal-eternal-ladybird.ngrok-free.app/storage/${mainImage}`}
                alt="party"
                className="h-full w-full"
              />
            </div>
            <div className="content  col-span-2  ">
              <div className="one flex  pr-[15px] mb-[24px]">
                <div className="w-[261px] nameParty">
                  <h3 className="text-[#29346c] text-[16px]">اسم الحفلة</h3>
                  <input
                    className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 border-b-2 py-[5px] bg-transparent "
                    value={nameParty}
                    onChange={handleNamePartyChange}
                  />
                </div>
                <div className="w-full locationParty mr-[40px]">
                  <h3 className="text-[#29346c] text-[16px] flex items-center">
                    مكان الحفلة
                  </h3>
                  <div className="flex items-center border-b-2 ">
                    <div className="ml-[5px]">
                      <img src={location2} alt="location" />{" "}
                    </div>
                    <input
                      className="text-[#041461] text-[15px] font-bold  w-full outline-0 py-[5px] bg-transparent "
                      value={locationParty}
                      onChange={handleLocationPartyChange}
                    />
                  </div>
                </div>
              </div>
              <div className="two flex justify-between pr-[15px] mb-[24px] items-start">
                <div className="w-[261px] dateParty">
                  <h3 className="text-[#29346c] text-[16px]">
                    {" "}
                    تاريخ و واقت الحفلة
                  </h3>
                  <div className="flex items-center border-b-2 ">
                    <input
                      type="datetime-local"
                      className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 py-[5px] bg-transparent "
                      value={timeDate} // Update value with dateParty
                      onChange={handleDatePartyChange}
                    />
                  </div>
                </div>
                <div className="three  pr-[15px] items-center">
                  <h3 className="text-[#29346c] text-[16px] ml-[24px] font-bold">
                    الوصف
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
          </div>
          <div className="content">
            <div className="img mt-[24px] w-full overflow-hidden">
              <h3 className="text-[24px] font-bold">الصور</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                {images.map((image) => (
                  <img
                    key={image.id}
                    src={`https://causal-eternal-ladybird.ngrok-free.app/storage/${image.image}`}
                    alt={`img`}
                    className={`w-[224px] h-[144px] object-cover ml-[18px] block relative`}
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
                <video
                  src={`https://causal-eternal-ladybird.ngrok-free.app/storage/${videos}`}
                  controls
                  className="w-[211px] h-[145px]"
                ></video>
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
                  <div
                    onClick={handleSaveData}
                    className="add w-[244px]  cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px] hover:opacity-90"
                  >
                    <h3>حفظ</h3>
                  </div>
                  <div
                    onClick={goBack}
                    className="remove w-[244px] cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px] hover:opacity-90"
                  >
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
