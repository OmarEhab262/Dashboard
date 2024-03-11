import React, { useState } from "react";
import LogoSide from "../components/LogoSide";
import { Link } from "react-router-dom";
import axios from "axios";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectUsername, setIncorrectUsername] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIncorrectUsername(false); // Reset incorrect state when typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIncorrectPassword(false); // Reset incorrect state when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://api.npoint.io/e7789345d320b409a032"
      );
      const data = response.data;

      // Check if username exists in the fetched data
      const user = data.find((user) => user.name === username);

      if (!user) {
        setIncorrectUsername(true);
        return;
      }

      // Check if the password matches the one associated with the username
      if (user.password !== password) {
        setIncorrectPassword(true);
        return;
      }

      // If both username and password are correct, navigate to Gg page
      // Redirect to Gg page
      window.location.href = "/Dashboard/#/Welcome";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      <LogoSide />
      <div className="col-span-2 bg-gray-200 rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="form w-[570px]">
          <div className="title">
            <p className="text-[32px] font-[700] text-[#041461]">
              سجل دخول
              <br />
              للوحة معلوماتك
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username"></label>
                <input
                  className={`w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectUsername ? "border-red-500" : "border-gray-400"
                  } my-[20px]  outline-none`}
                  placeholder="اسم المستخدم"
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <p
                  className={`text-red-600 mb-[20px] ${
                    incorrectUsername ? "block" : "hidden"
                  }`}
                >
                  برجاء ادخال اسم مستخدم صحيح
                </p>
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  className={`w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectPassword ? "border-red-500" : "border-gray-400"
                  } mb-[20px] outline-none`}
                  placeholder="كلمة المرور"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <p
                  className={`text-red-600 mb-[20px] ${
                    incorrectPassword ? "block" : "hidden"
                  }`}
                >
                  برجاء ادخال كلمة مرور صحيحه
                </p>
              </div>
              <div className="flex justify-between items-center font-[700] ">
                <button
                  className="w-[220px] bg-[#041461] hover:bg-[#041361db] py-[10px] text-gray-50 rounded-[40px] ease-in duration-300 text-center"
                  type="submit"
                  // to="/MainPage"
                >
                  تسجيل الدخول
                </button>
                <Link
                  to="/ForgotUserPass"
                  className="text-[#041461] text-[14px] border-b border-dotted border-[#041461]"
                >
                  نسيت اسم المستخدم الخاص بك او الباسورد؟
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
