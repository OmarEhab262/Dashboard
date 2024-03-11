import React, { useState } from "react";
import cam from "../assists/icon/cam.png";
import user from "../assists/imgs/mainuser.jpg";
import SideBar from "../components/SideBar";
const User = () => {
  const [username, setUsername] = useState("حمبولة");
  const [fullName, setFullName] = useState("حمبولة السيد احمد");
  const [email, setEmail] = useState("hambolaelsayed26.gmail.com");
  const [password, setPassword] = useState("1234");
  const [role, setRole] = useState("الادمن");
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  const [image, setImage] = useState(user);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    document.getElementById("imageInput").click();
  };
  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh]">
        <div
          className={`header flex items-center w-[100%] h-[35px] mt-[5px] mb-[5px] `}
        >
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">الملف الشخصى</span>
          </h3>
        </div>
        <div className="w-full overflow-auto ssc pl-[15px]">
          <div className="content mt-[17px] flex justify-between items-center w-full">
            <div className="head flex items-center ">
              <div>
                <div className="img w-[140px] h-[140px]  flex justify-center items-center relative">
                  <img src={image} alt="" className="rounded-full" />
                  <div
                    className="change absolute bottom-2 left-2 bg-[#041461] w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-pointer"
                    onClick={handleCameraClick}
                  >
                    <img src={cam} alt="" />
                  </div>
                </div>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
              <div className="info mr-[18px]">
                <div className="name text-[24px] font-bold text-[#041461]">
                  <h3>حمبولة السيد احمد </h3>
                </div>
                <div className="type text-[#041461B2] text-[24px]">
                  <h3>الادمن</h3>
                </div>
              </div>
            </div>
            <div className="title w-[154px] h-[64px] bg-[#041461D9] flex justify-center items-center rounded-[8px] text-white text-[16px]">
              <h3>تعديل بيانات</h3>
            </div>
          </div>
          <div className="information w-[70%] ">
            <div className="name mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>اسم المستخدم</h3>
              </div>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
            <div className="fullName mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>الاسم ثلاثي</h3>
              </div>
              <input
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
            <div className="email mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>البريد الالكترونى</h3>
              </div>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
            <div className="password mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>كلمة المرور</h3>
              </div>
              <input
                type="text"
                value={password}
                onChange={handlePasswordChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
            <div className="role mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>الدور</h3>
              </div>
              <input
                type="text"
                value={role}
                onChange={handleRoleChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
          </div>
          <div className="save w-[244px] mx-auto mb-[20px] mt-[40px] bg-[#041461D9] h-[60px] flex justify-center items-center rounded-[8px] cursor-pointer">
            <h3 className="text-white text-[20px] font-[500]">حفظ البيانات</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
