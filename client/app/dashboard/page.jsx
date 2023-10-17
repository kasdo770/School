import Image from "next/image";
import { AiOutlineSearch, AiOutlineSchedule } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div className="h-screen grid grid-flow-col grid-rows-[65px]">
      {/* nav */}
      <div className="bg-[#ffffff] col-span-6 border-r-[1px] flex justify-between items-center">
        <h1 className="ml-5 text-[20px]">Mr.Romeo</h1>
        <div className="flex items-center mr-5 gap-2">
          <input
            dir="rtl"
            type="text"
            placeholder="البحث.."
            className="border-2 w-[6rem] sm:w-[20rem] p-1 focus:border-gray-500 rounded-[4px]"
          ></input>
          <AiOutlineSearch className="text-[26px]" />
        </div>
      </div>
      {/* end of nav & start of body*/}
      <div className="bg-[#f2f1f6] col-span-6 row-span-2">body</div>
      {/* end of body & start of sidebar */}
      <div className="bg-[#fefefe] row-span-3 drop-shadow-xl flex flex-col">
        <Image
          src={"/ahaha.jpg"}
          height={0}
          width={0}
          className="rounded-full w-[5rem] h-[5rem] mx-auto mt-10 mb-[5rem] hidden md:block"
        ></Image>
        <div className="flex justify-center gap-4">
          <div className="flex-col text-[20px] lg:text-[25px] gap-12 md:gap-8 items-end flex mt-[10rem] md:mt-0">
            <button className="flex items-center gap-2 hover:opacity-[80%] rounded-l-lg p-[1px] cursor-pointer">
              <p className="hidden md:block "> المعلمون</p>
              <FaChalkboardTeacher className="text-[30px]" />
            </button>
            <div className="flex items-center gap-2">
              <p className="hidden md:block"> الطلاب</p>
              <PiStudentBold className="text-[30px]" />
            </div>
            <div className="flex items-center gap-2">
              <p className="hidden md:block"> الجداول</p>
              <AiOutlineSchedule className="text-[30px]" />
            </div>
            <div className="flex items-center gap-2">
              <p className="hidden md:block">الاخبار </p>
              <BiNews className="text-[30px]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-t-2 gap-2 mt-[6rem] pt-1">
          <p className="text-[19px] lg:text-[20px] hidden md:block">
            تسجيل الخروج
          </p>
          <FaChalkboardTeacher className="text-[25px]" />
        </div>
      </div>
    </div>
  );
}
