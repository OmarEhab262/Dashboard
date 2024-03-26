import React, { useEffect } from "react";
import "./style.css";
import fimg from "../assists/imgs/fimg.png";
import rightArrow from "../assists/icon/rightArrow.png";
import rrr from "../assists/icon/rrr.png";
import gggg from "../assists/icon/gggg.png";
import eee from "../assists/icon/eee.png";
import ffff from "../assists/icon/ffff.png";
import one from "../assists/icon/one.png";
import two from "../assists/icon/two.png";
import three from "../assists/icon/three.png";
import four from "../assists/icon/four.png";
import five from "../assists/icon/five.png";
import uiwDate from "../assists/icon/uiw_date.png";
import mingcute from "../assists/icon/mingcute.png";
import carbon_location from "../assists/icon/carbon_location.png";
import ion_mic from "../assists/icon/ion_mic-outline.png";
import llll from "../assists/icon/llll.png";
import homeLogo from "../assists/imgs/homeLogo.svg";
import apple from "../assists/imgs/apple.png";
import google from "../assists/imgs/google.png";
import whiteBg from "../assists/imgs/whiteBg.png";
import ggggg from "../assists/imgs/ggggg.png";
import about from "../assists/imgs/about.jpeg";
import phones from "../assists/imgs/phones.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-[98%] m-4 mx-auto ">
      <div
        className="home  flex flex-col items-center relative  overflow-hidden gap-20 rounded-[24px]"
        style={{
          backgroundImage: `url(${fimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[24px]"></div>
        <div
          className="nav rounded-[40px]  z-[3] flex items-center justify-between  p-[8px] text-white text-center text-base lg:text-lg md:text-sm font-semibold mt-3 md:text-[12px] lg:text-[16px] lg:flex hidden  gap-0  xl:gap-14 "
          style={{ backgroundImage: `url(${ggggg})` }}
          data-aos="fade-down"
        >
          <div className=" cursor-pointer">
            <h3 className="active bg-[#E8E9F8] text-[#041461] rounded-[32px] p-[1rem] ">
              الصفحة الرئيسية
            </h3>
          </div>
          <div className=" cursor-pointer">
            <h3 className="p-[1rem] ">نبذة عنا</h3>
          </div>
          <div className=" cursor-pointer">
            <h3 className="p-[1rem] ">خدماتنا</h3>
          </div>

          <div className="px-[39] ">
            <img src={homeLogo} alt="" />
          </div>
          <div className=" cursor-pointer">
            <h3 className="p-[1rem] ">لماذا نحن</h3>
          </div>
          <div className=" cursor-pointer">
            <h3 className="p-[1rem] ">تواصل معنا</h3>
          </div>
          <div className=" cursor-pointer">
            <h3 className="p-[1rem] ">ابحث معنا</h3>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="center w-full flex justify-between my-auto items-center z-[3]"
        >
          <div
            data-aos="fade-left"
            className="rArrow  border-white border-solid border-2 rounded-[8px] m-4 cursor-pointer w-[50px] h-[50px] flex justify-center items-center absolute right-0"
          >
            <img src={rrr} alt="" className=" w-[24px] " />
          </div>
          <div className="typography h-full flex justify-center gap-[24px] items-center flex-col text-[#E8E9F8] text-[37px] font-[600]  w-full text-center">
            <h3 className="sm:text-[37px] text-[27px] text-center w-[50%]">
              17-19 ابريل 2024
            </h3>
            <h2 className="sm:text-[45px] text-[35px] text-center w-[50%]">
              مؤتمر تحليل البيانات في القاهرة
            </h2>
            <div className="flex justify-between items-center text-[16px] mt-[10px] my-3   ">
              <div
                className="right flex justify-center items-center w-[150px] py-4  rounded-[16px] cursor-pointer text-center mx-4 "
                style={{
                  backgroundImage: `url(${ggggg})`,
                  backgroundPosition: "center",
                }}
              >
                <img
                  src={rightArrow}
                  alt=""
                  className="bg-white ml-[16px] p-[5px] rounded-full "
                />
                <h3>احجز اﻷن</h3>
              </div>
              <div className="left flex justify-center items-center w-[150px] border-white border-solid border-2 py-4 rounded-[16px] cursor-pointer text-center mx-4 ">
                <h3>شاهد الفيديو</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="lArrow  border-white border-solid border-2 rounded-[8px] m-4 cursor-pointer  w-[50px] h-[50px]  flex justify-center items-center absolute left-0"
          >
            <img src={llll} alt="" className=" w-[24px]" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={`foot flex justify-between items-center  w-[80%] mb-[20px] py-[13px] px-[32px] rounded-[16px] lg:flex hidden z-[3]`}
          style={{ backgroundImage: `url(${ggggg})` }}
        >
          <div className=" flex items-center gap-3">
            <img src={uiwDate} alt="" className="w-[40px] h-[40px]" />
            <div className="info">
              <h3 className="text-[16px] font-[600] text-white">التاريخ</h3>
              <h3 className="text-[#838389] text-[14px]">17-19 ابريل، 2024</h3>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={mingcute} alt="" className="w-[40px] h-[40px]" />
            <div className="info">
              <h3 className="text-[16px] font-[600] text-white">الميعاد</h3>
              <h3 className="text-[#838389] text-[14px]">10:00 am</h3>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={carbon_location} alt="" className="w-[40px] h-[40px]" />
            <div className="info">
              <h3 className="text-[16px] font-[600] text-white">المكان</h3>
              <h3 className="text-[#838389] text-[14px]">
                ارض المعارض، التجمع الخامس، القاهرة
              </h3>
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={ion_mic} alt="" className="w-[40px] h-[40px]" />
            <div className="info">
              <h3 className="text-[16px] font-[600] text-white">الراعي</h3>
              <h3 className="text-[#838389] text-[14px]">
                شركة الرواد للبرمجه
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about grid lg:grid-cols-2 grid-cols-1 items-center  justify-items-center  gap-5 my-[90px] overflow-hidden">
        <div
          data-aos="fade-left"
          className="img h-[284px] w-full lg:w-[457px]  flex justify-center
          items-center relative rounded-[16px] "
          style={{
            backgroundImage: `url(${about})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[16px]"></div>
          <div className="border border-white border-[4px] rounded-[16px] p-[20px] z-[2] w-[90%] h-[90%] flex justify-center items-center">
            <h3 className="text-[21px] font-[700] text-white">نبذة عنا</h3>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="info text-[16px] font-[600] text-white  "
        >
          <div className="text flex justify-center lg:items-start items-center flex-col p-4 lg:w-[85%] w-full max-sm:text-center ">
            <h3 className="leading-7">
              باهتمامنا العميق بتوفير تجربة فريدة ولا تُنسى، نحن في صفحة حجز
              الحفلات نسعى جاهدين لتحويل كل مناسبة إلى لحظات لا تُنسى. نفخر
              بتقديم خدماتنا المتميزة في تنظيم وتخطيط الحفلات، سواء كانت لحفلات
              الزفاف، الاحتفالات الخاصة، العروض الموسيقية، أو أي مناسبة تحتاج
              إلى لمسة من السحر. بفريقنا المحترف والمبدع، نضمن لكم تجربة
              استثنائية تتماشى مع تطلعاتكم وتفضيلاتكم. دعونا نساعدكم في تحويل
              أفكاركم إلى واقع، ونخلق لكم لحظات تاريخية لا تُنسى.
            </h3>
            <div className="btn mt-[28px] flex justify-center items-center  border-white border-solid border-2 px-[30px] py-[16px]  rounded-[16px] cursor-pointer w-[170px]">
              <h3>اعرف المزيد</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="we flex flex-col items-center justify-center rounded-[24px] py-[80px]"
        style={{
          backgroundImage: `url(${whiteBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="header">
          <h2 className="text-[#041461] text-[32px] font-[700] w-fit mx-auto mb-[70px]">
            لماذا نحن؟!
          </h2>
          <div className="boxes grid grid-cols-1 md:grid-cols-3  justify-items-center gap-5">
            <div className="box">
              <div className="top flex flex-col justify-center items-center gap-3">
                <div className="img bg-[#041461] rounded-full p-[20px]">
                  <img src={eee} alt="eee" />
                </div>
                <h3 className="text-[20px] font-[700] text-[#041461]">
                  رؤيتنا
                </h3>
              </div>
              <div className="text w-[70%] text-center mx-auto text-[#838389] text-[16px] font-[700] mt-[16px]">
                <h3>
                  تنظيم و إدارة حفلات الزفافتنظيم و إدارة حفلات الزفافتنظيم و
                  إدارة حفلات الزفاف
                </h3>
              </div>
            </div>
            <div className="box">
              <div className="top flex flex-col justify-center items-center gap-3">
                <div className="img bg-[#041461] rounded-full p-[20px]">
                  <img src={gggg} alt="eee" />
                </div>
                <h3 className="text-[20px] font-[700] text-[#041461]">قيمنا</h3>
              </div>
              <div className="text w-[70%] text-center mx-auto text-[#838389] text-[16px] font-[700] mt-[16px]">
                <h3>
                  تنظيم و إدارة حفلات الزفافتنظيم و إدارة حفلات الزفافتنظيم و
                  إدارة حفلات الزفاف
                </h3>
              </div>
            </div>
            <div className="box">
              <div className="top flex flex-col justify-center items-center gap-3">
                <div className="img bg-[#041461] rounded-full p-[20px]">
                  <img src={ffff} alt="eee" />
                </div>
                <h3 className="text-[20px] font-[700] text-[#041461]">
                  مهمتنا
                </h3>
              </div>
              <div className="text w-[70%] text-center mx-auto text-[#838389] text-[16px] font-[700] mt-[16px]">
                <h3>
                  تنظيم و إدارة حفلات الزفافتنظيم و إدارة حفلات الزفافتنظيم و
                  إدارة حفلات الزفاف
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services flex justify-center items-center flex-col overflow-hidden">
        <h1
          data-aos="fade-down"
          className="text-[32px] font-[700] text-white my-[80px]"
        >
          خدماتنا المقدمة
        </h1>
        <div className="boxes flex justify-center items-center flex-wrap text-[20px] text-white gap-16">
          <div
            data-aos="fade-left"
            className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4 border border-white border-[3px] py-[24px]"
          >
            <img src={one} alt="" />
            <h2 className="">تنظيم المؤتمرات و المعارض</h2>
          </div>
          <div
            data-aos="fade-down"
            className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4 border border-white border-[3px] py-[24px]"
          >
            <img src={two} alt="" />
            <h2 className="">تنظيم حفلات التخرج</h2>
          </div>
          <div
            data-aos="fade-right"
            className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4 border border-white border-[3px] py-[24px]"
          >
            <img src={three} alt="" />
            <h2 className="">تنظيم و إدارة حفلات الزفاف</h2>
          </div>
          <div
            data-aos="fade-left"
            className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4 border border-white border-[3px] py-[24px]"
          >
            <img src={four} alt="" />
            <h2 className="">تصوير الحفلات و المناسبات</h2>
          </div>
          <div
            data-aos="fade-right"
            className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4 border border-white border-[3px] py-[24px]"
          >
            <img src={five} alt="" />
            <h2 className="">اﻹدارة التسويقية</h2>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="apps flex justify-center items-center flex-col overflow-hidden rounded-[24px]  my-[70px]"
        style={{
          backgroundImage: `url(${whiteBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-[32px] font-[700] text-[#041461] my-[80px]">
          حمل التطبيق الخاص بنا
        </h1>
        <div className="icons flex gap-10 flex-wrap justify-center">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
        <div className="mt-[80px]">
          <img src={phones} alt="" />
        </div>
      </div>
      <div className="footer grid md:grid-cols-3 grid-cols-1 md:justify-items-center justify-items-start gap-10 px-[15px]">
        <div className="connect text-[18px] font-[700] text-white">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389]">تواصل معنا</h3>
          </div>
          <div className="bot">
            <div className="grid grid-cols-1 gap-3">
              <h3>mailto:Info@whiteeagles.net</h3>
              <h3>01022550799 - 01022550788</h3>
            </div>
          </div>
        </div>
        <div className="ourPages text-[18px] font-[700] text-white">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389]">صفحاتنا</h3>
          </div>
          <div className="bot">
            <div className="grid grid-cols-2 gap-3">
              <h3>Facebook</h3>
              <h3>Tiktok</h3>
              <h3>Instagram</h3>
              <h3>Twitter</h3>
            </div>
          </div>
        </div>
        <div className="categories text-[18px] font-[700] text-white">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389]">الفئات</h3>
          </div>
          <div className="bot">
            <div className="grid grid-cols-3 gap-3">
              <h3>مؤتمرات</h3>
              <h3>ستاند اب</h3>
              <h3>بازار</h3>
              <h3>حفلات غناء</h3>
              <h3>حفلات تخرج</h3>
              <h3>حفلات فان داي</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="rights grid md:grid-cols-2 grid-cols-1 md:justify-items-center  justify-items-start items-center mt-[120px] gap-5 px-[15px]">
        <div className="">
          <p className="text-[18px] font-[700] text-[#838389]">
            © 2024 جميع الحقوق محفوظة لدى White Eagle
          </p>
        </div>
        <div className="mx-auto">
          <img src={homeLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
