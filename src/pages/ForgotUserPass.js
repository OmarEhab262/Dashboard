import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSide from "../components/LogoSide";
import leftarrow from "../assists/icon/leftarrow.png";

const ForgotUserPass = () => {
  const [email, setEmail] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState(false);

  // Array of valid email addresses
  const validEmails = [
    "example1@example.com",
    "example2@example.com",
    "example3@example.com",
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIncorrectEmail(false); // Reset incorrect state when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email matches any of the valid email addresses
    if (!validEmails.includes(email)) {
      setIncorrectEmail(true);
      return;
    }

    // Generate random 6-digit number
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    console.log("Random 6-digit code:", randomCode);

    // Store the random code in local storage
    localStorage.setItem("randomCode", randomCode.toString());

    // Placeholder functionality to demonstrate submission
    console.log("Email submitted:", email);
    // Redirect to CheckEmail page
    setTimeout(() => {
      window.location.href = "/Dashboard/#/CheckEmail";
    }, 3000); // Change delay to 3 seconds
  };

  return (
    <div className="grid grid-cols-3  h-screen">
      <LogoSide />
      <div className="col-span-2 bg-gray-200 rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="form w-[570px]">
          <div className="title">
            <p className="text-[32px] font-[700] text-[#041461] my-7">
              نسيت اسم المستخدم او الباسورد؟!
            </p>
            <span className="my-7">
              برجاء إدخال البريد الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك
            </span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email"></label>
                <input
                  className={`my-7 w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectEmail ? "border-red-500" : "border-gray-400"
                  } mb-[20px] outline-none`}
                  placeholder="البريد الإلكتروني"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <p
                  className={`text-red-600 mb-[20px] ${
                    incorrectEmail ? "block" : "hidden"
                  }`}
                >
                  برجاء إدخال بريد إلكتروني صحيح
                </p>
              </div>
              <div className="flex justify-between items-center font-[700] ">
                <button
                  className="w-[220px] bg-[#041461] hover:bg-[#041361db] py-[10px] text-gray-50 rounded-[40px] ease-in duration-300"
                  type="submit"
                >
                  ارسال
                </button>
                <Link to="/" className="text-[#041461] text-[14px] ">
                  العودة لتسجيل الدخول
                  <img
                    src={leftarrow}
                    alt="leftarrow"
                    className="inline-block mr-3"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotUserPass;
