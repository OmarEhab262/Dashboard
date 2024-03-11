import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoSide from "../components/LogoSide";
import leftarrow from "../assists/icon/leftarrow.png";

const CheckEmail = () => {
  const [num, setNum] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incorrectNum, setIncorrectNum] = useState(false);
  const [incorrectNewPassword, setIncorrectNewPassword] = useState(false);
  const [incorrectConfirmPassword, setIncorrectConfirmPassword] =
    useState(false);

  useEffect(() => {
    // Retrieve the random code from local storage
    const storedCode = localStorage.getItem("randomCode");
    if (storedCode) {
      setNum(storedCode); // Set the retrieved code to the state
    } else {
      generateRandomCode(); // Generate a new code if none found in local storage
    }
  }, []);

  const generateRandomCode = () => {
    // Generate random 6-digit number
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    console.log("New random 6-digit code:", randomCode);
    setNum(randomCode.toString()); // Convert to string and update state
    // Store the random code in local storage
    localStorage.setItem("randomCode", randomCode);
  };

  const handleNumChange = (e) => {
    const enteredNum = e.target.value;
    setEnteredCode(enteredNum);
    setIncorrectNum(false);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setIncorrectNewPassword(false); // Reset incorrect state when typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIncorrectConfirmPassword(false); // Reset incorrect state when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if num is a 6-digit number
    if (!/^\d{6}$/.test(enteredCode) || enteredCode !== num) {
      setIncorrectNum(true);
    }

    // Check if newPassword is at least 6 characters long
    if (newPassword.length < 6) {
      setIncorrectNewPassword(true);
    }

    // Check if confirmPassword matches newPassword
    if (confirmPassword !== newPassword || confirmPassword === "") {
      setIncorrectConfirmPassword(true);
      return;
    }

    // Placeholder functionality to demonstrate submission
    console.log("Form submitted:", { num, newPassword });
    window.location.href = "/Dashboard/#/SuccessfulPassword";
  };

  return (
    <div className="grid grid-cols-3  h-screen">
      <LogoSide />
      <div className="col-span-2 bg-gray-200 rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="form w-[570px]">
          <div className="title">
            <p className="text-[32px] font-[700] text-[#041461] my-7">
              تفقد اﻹيميل الخاص بك
            </p>
            <span className="my-7 text-[17px]">
              برجاء إدخال الرمز المكون من 6 ارقام. ثم قم بإنشاء و تأكيد كلمة
              المرور الجديدة الخاصة بك.
            </span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between items-center ">
                  <label htmlFor="num " style={{ display: "none" }}></label>
                  <input
                    className={` w-[60%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                      incorrectNum ? "border-red-500" : "border-gray-400"
                    } my-[13px] outline-none`}
                    placeholder="الرمز المكون من 6 ارقام"
                    type="text" // Change type to text
                    id="num"
                    name="num"
                    value={enteredCode}
                    onChange={handleNumChange}
                    onKeyPress={(e) => {
                      // Allow only numeric characters
                      const isValid = /^\d*$/.test(e.key);
                      if (!isValid) {
                        e.preventDefault();
                      }
                    }}
                  />

                  <span className="cursor-pointer" onClick={generateRandomCode}>
                    لم يصلك الرمز بعد؟!
                  </span>
                </div>
                <p
                  className={`text-red-600  ${
                    incorrectNum ? "block" : "hidden"
                  }`}
                >
                  {incorrectNum ? "الرمز الذى ادخلته غير صحيح" : ""}
                </p>
              </div>
              <div>
                <label htmlFor="newPassword"></label>
                <input
                  className={` w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectNewPassword ? "border-red-500" : "border-gray-400"
                  } my-[13px] outline-none`}
                  placeholder="كلمة المرور الجديدة"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <p
                  className={`text-red-600  ${
                    incorrectNewPassword ? "block" : "hidden"
                  }`}
                >
                  برجاء ادخال كلمة مرور صالحة
                </p>
              </div>
              <div>
                <label htmlFor="confirmPassword"></label>
                <input
                  className={` w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectConfirmPassword
                      ? "border-red-500"
                      : "border-gray-400"
                  } my-[13px] outline-none`}
                  placeholder="تأكيد كلمة المرور"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <p
                  className={`text-red-600 mb-[20px] ${
                    incorrectConfirmPassword ? "block" : "hidden"
                  }`}
                >
                  برجاء ادخال كلمة مرور متطابقه
                </p>
              </div>
              <div className="flex justify-between items-center font-[700] ">
                <button
                  className="w-[220px] bg-[#041461] hover:bg-[#041361db] py-[10px]  text-gray-50 rounded-[40px] ease-in duration-300 mt-[13px]"
                  type="submit"
                >
                  إعادة تعيين كلمة المرور
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

export default CheckEmail;
