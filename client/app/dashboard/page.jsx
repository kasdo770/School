"use client";
import Image from "next/image";
import { FaChalkboardTeacher, FaMoon } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiNews, BiLogOut } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { TeacherTables } from "../components/dashboard-comps/Teachers";
import { Students } from "../components/dashboard-comps/Students";

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);

  return (
    <div className="h-screen flex">
      {/* nav -----------------------------------------------------------------------------*/}
      <div className="flex flex-col w-full">
        <div className="bg-[#ffffff] border-r-[1px] flex justify-between items-center p-3">
          <div className="flex items-center gap-1">
            <h1 className="sm:ml-5 text-[15px] md:text-[18px] font-bold">
              لوحة القيادة
            </h1>
            <MdKeyboardArrowDown
              className={`cursor-pointer text-xl transition-sm ${more == true ? "-rotate-90" : ""
                }`}
              onClick={() => {
                setMore(!more);
              }}
            />
            <div
              dir="rtl"
              className={`flex items-center transition-md gap-2 xl:gap-4 ml-[-25rem] ${more == true
                ? "opacity-100 ml-[0.1rem] sm:ml-[0.5rem]"
                : "opacity-0"
                }`}
            >
              <a
                href="#"
                className="flex items-center gap-1 text-white active:opacity-[110%] hover:opacity-[80%] p-2 rounded-sm bg-[#00b9ff]"
              >
                <p className="text-[13px] lg:text-sm select-none hidden sm:block">
                  تسجيل الخروج
                </p>
                <BiLogOut className="text-md rotate-180" />
              </a>
              <a
                href="/"
                className="flex items-center gap-1 text-white active:opacity-[110%] hover:opacity-[80%] p-2 rounded-sm bg-[#ff7000]"
              >
                <p className="text-sm select-none	hidden sm:block"> الرئيسية</p>
                <AiOutlineHome className="text-md" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 border-2 w-fit mr-3">
            <input
              dir="rtl"
              type="text"
              placeholder="البحث.."
              className={`border-0 w-[6rem] active:border-0 focus:border-0 sm:w-[10rem] lg:w-[16rem] p-1 focus:border-gray-500 rounded-[4px] pr-[2rem] transition-sm ${more == true ? "opacity-0 md:opacity-100" : ""
                } `}
            ></input>
            <AiOutlineSearch className="text-[26px]  right-0 mr-3" />
          </div>

        </div>
        {/* end of nav & start of body ---------------------------------------------------------*/}

        <div className="bg-[#f2f1f6] h-full">
          <div
            className={`${page == 1 ? "block" : "hidden"
              } max-h-[35rem] overflow-auto`}
          >
            <TeacherTables />
          </div>
          <div
            className={`${page == 2 ? "block" : "hidden"
              } max-h-[35rem] overflow-auto`}
          >
            <Students />
          </div>
        </div>
      </div>
      {/* end of body & start of sidebar ------------------------------------------------------*/}
      <div className="bg-[#fefefe] drop-shadow-xl flex flex-col w-[5rem] md:w-[10rem] lg:w-[15rem]">
        <div
          className="flex flex-col lg:flex-row items-center pb-[2rem] mb-[2rem] mx-auto mt-5 md:mt-10 gap-2 border-b-2"
          dir="rtl"
        >
          <Image
            src={"/logo.png"}
            height={500}
            width={500}
            className="rounded-full w-[3rem] h-[3rem]"
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

        <div className="flex flex-col items-end md:mt-0 gap-3 text-[15px] lg:text-[18px] 2xl:text-[21px]">
          <button
            className={`flex items-center justify-end w-[90%] mx-auto gap-2 px-[4px] py-[3px] rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 1
              ? "opacity-[100%] bg-[#00b9ff] text-white "
              : "opacity-[50%]"
              }`}
            onClick={() => {
              setPage(1);
            }}
          >
            <p className="hidden md:block">المعلمون</p>
            <FaChalkboardTeacher className="mx-auto md:mx-0 text-2xl md:text-lg lg:text-xl" />
          </button>
          <button
            className={`flex items-center justify-end w-[90%] mx-auto gap-2 px-[4px] py-[3px] rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 2
              ? "opacity-[100%] bg-[#00b9ff] text-white "
              : "opacity-[50%]"
              }`}
            onClick={() => {
              setPage(2);
            }}
          >
            <p className="hidden md:block"> الطلاب</p>
            <PiStudentBold className="mx-auto md:mx-0 text-2xl md:text-lg lg:text-xl" />
          </button>
          <button
            className={`flex items-center justify-end w-[90%] mx-auto gap-2 px-[4px] py-[3px] rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 3
              ? "opacity-[100%] bg-[#00b9ff] text-white "
              : "opacity-[50%]"
              }`}
            onClick={() => {
              setPage(3);
            }}
          >
            <p className="hidden md:block"> الجداول</p>
            <AiOutlineSchedule className="mx-auto md:mx-0 text-2xl md:text-lg lg:text-xl" />
          </button>
          <button
            className={`flex items-center justify-end w-[90%] mx-auto gap-2 px-[4px] py-[3px] rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 4
              ? "opacity-[100%] bg-[#00b9ff] text-white "
              : "opacity-[50%]"
              }`}
            onClick={() => {
              setPage(4);
            }}
          >
            <p className="hidden md:block">الاخبار </p>
            <BiNews className="mx-auto md:mx-0 text-2xl md:text-lg lg:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
