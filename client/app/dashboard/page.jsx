"use client";
import Image from "next/image";
import { FaChalkboardTeacher, FaMoon } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiNews, BiLogOut } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { TeacherTables } from "../components/dashboard-comps/Teachers";
import { Students } from "../components/dashboard-comps/Students";
import { Dialog } from "../components/dashboard-comps/Dialog";

export default function Dashboard() {
  const [page, setPage] = useState(1);

  return (
    <div className="h-screen flex Cairo">
      {/* nav -----------------------------------------------------------------------------*/}
      <div className="flex flex-col w-full">
        <div className="bg-[#ffffff] border-r-[1px] flex justify-between items-center p-3">
          <div className="flex items-center gap-1">
            <h1 className="sm:ml-5 text-[15px] md:text-[18px] font-bold">
              لوحة القيادة
            </h1>
          </div>

          <div className="flex items-center transition-sm border-[1px] border-gray-300 rounded-sm ">
            <input
              dir="rtl"
              type="text"
              placeholder="البحث.."
              className="select-none w-[7rem] sm:w-[10rem] lg:w-[16rem] outline-none sm:pt-1 rounded-sm"
            ></input>
            <AiOutlineSearch className="text-[18px] right-0 ml-1 mr-2 text-gray-400 mt-[2px]" />
          </div>
        </div>
        {/* end of nav & start of body ---------------------------------------------------------*/}

        <div className="bg-[#f2f1f6] h-screen overflow-auto">
          <div className={`${page == 1 ? "block" : "hidden"} `}>
            <TeacherTables />
          </div>
          <div className={`${page == 2 ? "block" : "hidden"}`}>
            <Students />
          </div>
          <div
            className={`${
              page == 3 ? "block" : "hidden"
            } flex items-center justify-center h-full`}
          >
            <p className=""> جاري العمل</p>
          </div>
          <div
            className={`${
              page == 4 ? "block" : "hidden"
            } flex items-center justify-center h-full`}
          >
            <p className=""> جاري العمل</p>
          </div>
          {/* <Dialog /> */}
        </div>
      </div>
      {/* end of body & start of sidebar ------------------------------------------------------*/}
      <div className="bg-[#fefefe] drop-shadow-xl flex flex-col w-[4rem] sm:w-[5rem] md:w-[10rem] lg:w-[15rem]">
        <div
          className="flex flex-col lg:flex-row items-center pb-[2rem] mb-[2rem] mx-auto mt-5 md:mt-10 gap-2 border-b-2"
          dir="rtl"
        >
          <Image
            src={"/logo.png"}
            height={500}
            width={500}
            className="rounded-full w-[2.7rem] h-[2.7rem] sm:w-[3rem] sm:h-[3rem]"
          ></Image>
          <div className="flex flex-col items-center lg:items-start hidden md:block">
            <p className="font-bold text-[14px] lg:text-[15px] xl:text-[16px]">
              يوسف البساطي
            </p>
            <p className="font-light text-[12px] lg:text-[13px] xl:text-[14px]">
              مدير المدرسة
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end md:mt-0 gap-3 text-[15px] lg:text-[17px] select-none">
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${
              page == 1
                ? "opacity-[100%] bg-[#00b9ff] text-white "
                : "opacity-[50%]"
            }`}
            onClick={() => {
              setPage(1);
            }}
          >
            <p className="hidden md:block">المعلمون</p>
            <FaChalkboardTeacher className="text-[19px] md:text-md mx-auto md:mx-0" />
          </button>
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${
              page == 2
                ? "opacity-[100%] bg-[#00b9ff] text-white "
                : "opacity-[50%]"
            }`}
            onClick={() => {
              setPage(2);
            }}
          >
            <p className="hidden md:block"> الطلاب</p>
            <PiStudentBold className="text-[19px] md:text-md mx-auto md:mx-0" />
          </button>
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${
              page == 3
                ? "opacity-[100%] bg-[#00b9ff] text-white "
                : "opacity-[50%]"
            }`}
            onClick={() => {
              setPage(3);
            }}
          >
            <p className="hidden md:block"> الجداول</p>
            <AiOutlineSchedule className="text-[19px] md:text-md mx-auto md:mx-0" />
          </button>
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${
              page == 4
                ? "opacity-[100%] bg-[#00b9ff] text-white "
                : "opacity-[50%]"
            }`}
            onClick={() => {
              setPage(4);
            }}
          >
            <p className="hidden md:block">الاخبار </p>
            <BiNews className="text-[19px] md:text-md mx-auto md:mx-0" />
          </button>
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2`}
            onClick={() => {
              setAdd(!add);
            }}
          >
            <p className="hidden md:block">اضافة</p>
            <AiOutlinePlus className="text-[19px] md:text-md mx-auto md:mx-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
