import React, { useState, useEffect } from "react";
import axios from "axios";
import search from "../assists/icon/search.png";
import SideBar from "../components/SideBar";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]); // State to store users data
  const navigate = useNavigate();

  useEffect(() => {
    const nameFilter = location.state.party;
    setUsers(nameFilter.users_party);
  }, [location.state.party]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
    // Implement search logic here if needed
  };

  // Filter users based on search query or show all users if search query is empty
  const searchInputLower = searchInput.toLowerCase();
  const filteredUsers = searchInput
    ? users.filter((user) =>
        user.name_user.toLowerCase().startsWith(searchInputLower)
      )
    : users;

  const goToUserDetails = (user) => {
    // Navigate to user details page with user ID
    navigate(`/user-details/${user.id_user}`);
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/{" "}
            <span className="text-[20px]">
              <span>الحجوزات /</span>
              <span>الحجوزات</span>
            </span>{" "}
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
              placeholder="ابحث عن المستخدمين"
            />
          </form>
        </div>
        <div
          className="countUsers w-[225px] h-[70px] rounded-[16px]  flex justify-center items-center my-[20px] py-[15px] border border-[#0413616b]"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <h3 className="font-bold text-[16px] text-[#041461]">
            عدد المستخدمين : <span>{filteredUsers.length}</span>
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
            {filteredUsers.map((user) => (
              <div
                key={user.id_user}
                className="flex justify-between items-center w-full "
                onClick={() => goToUserDetails(user)}
              >
                {/* Render user details */}
                <div className="info text-[15px] text-[#041461] font-bold items-center w-[85%] my-[10px] bg-[#727db5ab] rounded-[24px] grid grid-cols-4 py-[15px] justify-items-start">
                  <div className="flex pr-[20px] col-span-1">
                    <img
                      src={user.image_user} // Assuming image_user is the image URL
                      alt="user"
                      className="image_user w-[50px] h-[50px] rounded-full text-center"
                    />
                    <div className="flex flex-col items-start mr-[20px]">
                      <h3 className="name_user">{user.name_user}</h3>
                      <h3 className="email_user">{user.email_user}</h3>
                    </div>
                  </div>
                  <h3 className="numberOfCompanions_user col-span-1 justify-self-center">
                    {user.seat_user}
                  </h3>
                  <h3 className="party_user col-span-1 justify-self-center">
                    {user.party_user}
                  </h3>
                  <h3 className="cost_user col-span-1 justify-self-center">
                    {user.cost_user}
                  </h3>
                </div>

                <div className="w-[130px] h-[50px] flex justify-center items-center bg-[#041461] rounded-[10px] text-white mx-[10px] cursor-pointer">
                  عرض التذاكر
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
