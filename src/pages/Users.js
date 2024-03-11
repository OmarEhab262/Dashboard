import React, { useState, useEffect } from "react";
import search from "../assists/icon/search.png";
import SideBar from "../components/SideBar";
import usera from "../assists/imgs/usera.png";
import axios from "axios"; // Import axios for making API requests

const Users = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]); // State to store users data
  const [selectedLanguage, setSelectedLanguage] = useState("arabic"); // Default language is Arabic
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null); // State to store the user to be deleted

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("https://api.npoint.io/020cb3bcb198f0b39ee0")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchInput);
    // You can implement search logic here
  };

  // Filter users based on search query or show all users if search query is empty
  const searchInputLower = searchInput.toLowerCase();

  // Filter users based on search query or show all users if search query is empty
  const filteredUsers = searchInput
    ? users.filter(
        (user) =>
          user.name.arabic.toLowerCase().startsWith(searchInputLower) ||
          user.name.english.toLowerCase().startsWith(searchInputLower)
      )
    : users;

  // Function to handle user deletion
  const deleteUser = () => {
    if (userToDelete) {
      // Remove the user from the API
      axios
        .delete(`https://api.npoint.io/020cb3bcb198f0b39ee0/${userToDelete.id}`)
        .then((response) => {
          console.log("User deleted successfully");
          // Remove the deleted user from the local state
          setUsers(users.filter((user) => user.id !== userToDelete.id));
          // Close the delete confirmation dialog
          setShowDeleteConfirmation(false);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">المستخدمين</span>{" "}
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
          <div className="headerInfo text-[18px] text-[#041461] font-bold flex justify-around items-center w-[90%] my-[10px] ">
            <h3 className="w-[50px] ">الصورة</h3>
            <h3 className="w-[170px]">الاسم باللغة العربية</h3>
            <h3 className="w-[190px]">الاسم باللغة بالإنجليزية</h3>
            <h3 className="w-[130px]">البريد الإلكتروني</h3>
            <h3 className="w-[150px]  text-center">رقم الموبايل</h3>
            <h3 className="w-[80px]  text-center">السن</h3>
          </div>
          <div className="overflow-auto h-[67vh] ssc">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center w-full "
              >
                <div className="info text-[15px] text-[#041461] font-bold flex items-center w-[90%] my-[10px]  bg-[#727db5ab] rounded-[24px]  justify-around py-[15px]">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full text-center"
                  />
                  <h3 className="w-[170px]  text-center">{user.name.arabic}</h3>
                  <h3 className="w-[190px]  text-center">
                    {user.name.english}
                  </h3>
                  <h3 className="w-[130px]  text-center">{user.email}</h3>
                  <h3 className="w-[150px]  text-center">{user.phone}</h3>
                  <h3 className="w-[80px]  text-center">
                    {user.age >= 18 ? "أكبر من 18" : "أصغر من 18"}
                  </h3>
                </div>
                <div
                  className="w-[70px] h-[50px] flex justify-center items-center bg-[#041461] rounded-[10px] text-white mx-[10px] cursor-pointer"
                  onClick={() => {
                    setUserToDelete(user);
                    setShowDeleteConfirmation(true);
                  }}
                >
                  حذف
                </div>
              </div>
            ))}
          </div>
          {showDeleteConfirmation && (
            <div
              className="fixed h-screen w-full top-0 left-0 flex justify-center items-center text-[#041461]"
              style={{ background: "#66666657" }}
            >
              <div className="w-[393px] h-[194px] bg-white rounded-[24px] flex justify-center items-center  flex-col">
                <h3 className="text-[24px] font-[700]">
                  هل تريد حذف المستخدم؟
                </h3>
                <div className="flex gap-5">
                  <div
                    className="cursor-pointer w-[68px] h-[52px] rounded-[10px] bg-[#041461] text-white flex justify-center items-center border border-[#041461] mt-[20px]"
                    onClick={deleteUser}
                  >
                    نعم
                  </div>
                  <div
                    className="cursor-pointer w-[68px] h-[52px] rounded-[10px] bg-white text-[#041461] flex justify-center items-center border border-[#041461] mt-[20px]"
                    onClick={() => setShowDeleteConfirmation(false)}
                  >
                    لا
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
