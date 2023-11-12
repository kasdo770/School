"use client";
import Image from "next/image";
import { FaChalkboardTeacher, FaMoon } from "react-icons/fa";
import { BiNews, BiLogOut } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineSchedule } from "react-icons/ai";
import { TeacherTables } from "../components/dashboard-comps/Teachers";
import { Students } from "../components/dashboard-comps/Students";
import { StudentDialog } from "../components/dashboard-comps/StuDialog";
import { TeacherDialog } from "../components/dashboard-comps/TeaDialog";
import Loader from "../components/Loader";
import axios from "axios";
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [teachers, setteachers] = useState([])
  const [students, setstudents] = useState([])
  const router = useRouter();

  const [loading, setloading] = useState(false)
  useEffect(() => {
    const id = localStorage.getItem('token')
    console.log(id)
    axios.get(`/api/verifytoken`, {
      headers: {
        'authorization': id,
      }
    }).catch((e) => {
      if (e) {
        console.log("gay")
        localStorage.removeItem("token")
        router.push('/', { scroll: false })
      }
    })
  }, [])
  useEffect(() => {
    try {
      setloading(true)
      const id = localStorage.getItem('token')
      console.log(id)
      let response = axios.get(`/api/get/teacher`, {
        headers: {
          'authorization': id
        }
      }).then((data) => {
        setloading(false)
        console.log(data.data)
        setteachers(data.data)
      });
    } catch (error) {
      setloading(false)
      console.error(error);

    }
  }, [])
  const [page, setPage] = useState(1);
  function Getmethesekids() {
    try {
      setloading(true)
      const id = localStorage.getItem('token')
      console.log(id)
      let response = axios.get(`/api/get/student`, {
        headers: {
          'authorization': id
        }
      }).then((data) => {
        setloading(false)
        setstudents(data.data)
      });
    } catch (error) {
      setloading(false)
      console.error(error);

    }
  }
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
          <div className={`${page == 1 ? "block" : "hidden"} ${teachers ? "block" : "hidden"}`}>
            <TeacherTables data={teachers} />

          </div>
          <div className={`${page == 1 ? "block" : "hidden"} ${teachers == [] ? "block flex items-center justify-center h-full" : "hidden"}`}>
            <p className=""> لا يوجد بيانات</p>
          </div>
          <div className={`${page == 2 ? "block" : "hidden"}`}>
            <Students data={students} />
          </div>
          <div className={`${page == 1 ? "block" : "hidden"} ${students == [] ? "block flex items-center justify-center h-full" : "hidden"}`}>
            <p className=""> لا يوجد بيانات</p>
          </div>
          <div
            className={`${page == 3 ? "block" : "hidden"
              } flex items-center justify-center h-full`}
          >
            <p className=""> جاري العمل</p>
          </div>
          <div
            className={`${page == 4 ? "block" : "hidden"
              } flex items-center justify-center h-full`}
          >
            <p className=""> جاري العمل</p>
          </div>
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
            <p className="font-bold text-[14px] lg:text-[20px] xl:text-[25px]">
              اسكولا
            </p>

          </div>
        </div>

        <div className="flex flex-col items-end md:mt-0 gap-3 text-[15px] lg:text-[17px] select-none">
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 1
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
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 2
              ? "opacity-[100%] bg-[#00b9ff] text-white "
              : "opacity-[50%]"
              }`}
            onClick={() => {
              setPage(2);
              Getmethesekids();
            }}
          >
            <p className="hidden md:block"> الطلاب</p>
            <PiStudentBold className="text-[19px] md:text-md mx-auto md:mx-0" />
          </button>
          <button
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 3
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
            className={`flex items-center justify-end w-[75%] md:w-[90%] mx-auto gap-2 px-2 py-2 rounded-sm cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${page == 4
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
          <div
            className={` justify-center md:justify-end mx-auto w-[75%] md:w-[90%] transition-sm px-2 py-2 rounded-sm pl-2 ${page == 2 ? "flex" : "hidden"
              }`}
          >
            <StudentDialog />
          </div>
          <div
            className={` justify-center md:justify-end mx-auto w-[75%] md:w-[90%] transition-sm px-2 py-2 rounded-sm pl-2 ${page == 1 ? "flex" : "hidden"
              }`}
          >
            <TeacherDialog />
          </div>
        </div>
      </div>
      {loading ? (<Loader />) : ('')}

    </div>
  );
}
