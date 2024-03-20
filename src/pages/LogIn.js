import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LogoSide from "../components/LogoSide";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokenn, setToken] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://causal-eternal-ladybird.ngrok-free.app/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.data.token;
      setToken(response.data.data.token); // Move this line up
      console.log(response.data);
      console.log(token);
      const emailFromServer = response.data.data.email;
      console.log(emailFromServer);
      localStorage.setItem("token", token);
      window.location.href = "/Dashboard/#/Welcome";
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        } else if (error.response.status === 422) {
          setErrorMessage("بريد إلكتروني غير صحيح أو غير موجود.");
        } else {
          setErrorMessage(`خطأ في الخادم: ${error.response.status}`);
        }
      } else if (error.request) {
        setErrorMessage(
          "خطأ في الشبكة. الرجاء التحقق من اتصال الإنترنت الخاص بك."
        );
      } else {
        console.error("خطأ:", error.message);
        setErrorMessage(
          "حدث خطأ أثناء تسجيل الدخول. الرجاء المحاولة مرة أخرى في وقت لاحق."
        );
      }
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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email"></label>
              <input
                className={`w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                  errorMessage ? "border-red-500" : "border-gray-400"
                } my-[20px]  outline-none`}
                placeholder="البريد الإلكتروني"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                className={`w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                  errorMessage ? "border-red-500" : "border-gray-400"
                } mb-[20px] outline-none`}
                placeholder="كلمة المرور"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex justify-between items-center font-[700] ">
              <button
                className="w-[220px] bg-[#041461] hover:bg-[#041361db] py-[10px] text-gray-50 rounded-[40px] ease-in duration-300 text-center"
                type="submit"
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
          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LogIn;
