"use client";
import Image from "next/image";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRows } from "../components/dashboard-comps/TableRows";
import { TableRowsPhone } from "../components/dashboard-comps/TableRowsPhone";

export default function Dashboard() {
  const [page, setPage] = useState(1);
  return (
    <div className="h-screen grid grid-flow-col grid-rows-[65px]">
      {/* nav -----------------------------------------------------------------------------*/}
      <div className="bg-[#ffffff] col-span-6 border-r-[1px] flex justify-between items-center">
        <h1 className="ml-5 text-[20px]">Mr.Romeo</h1>
        <div className="flex items-center mr-5 gap-2">
          <input
            dir="rtl"
            type="text"
            placeholder="البحث.."
            className="border-2 w-[6rem] sm:w-[20rem] p-1 focus:border-gray-500 rounded-[4px] pr-[2rem]"
          ></input>
          <AiOutlineSearch className="text-[26px] absolute right-0 mr-[14.5rem]" />
        </div>
      </div>
      {/* end of nav & start of body ---------------------------------------------------------*/}
      <div className="bg-[#f2f1f6] col-span-6 row-span-2">
        <div
          className={`${
            page == 1 ? "block" : "hidden"
          } max-h-[35rem] overflow-auto`}
        >
          <Table className="bg-white sm:w-[90%] mx-auto my-5 hidden sm:table">
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الخصم</TableHead>
                <TableHead className="text-right"> الراتب</TableHead>
                <TableHead className="text-right">المادة</TableHead>
                <TableHead className="text-right">رقم الهاتف</TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRows
                name={"يوسف سامح البساطي السيد الكلب"}
                phone={"010101011021"}
                subject={"الرياضيات الوسخه"}
                salary={"100k في الدقيقه"}
                discount={"300"}
              ></TableRows>
              <TableRows
                name={"يوسف سامح البساطي السيد الكلب"}
                phone={"010101011021"}
                subject={"الرياضيات الوسخه"}
                salary={"100k في الدقيقه"}
                discount={"300"}
              ></TableRows>
              <TableRows
                name={"يوسف سامح البساطي السيد الكلب"}
                phone={"010101011021"}
                subject={"الرياضيات الوسخه"}
                salary={"100k في الدقيقه"}
                discount={"300"}
              ></TableRows>
            </TableBody>
          </Table>
          <div className="bg-white block sm:hidden w-[90%] mx-auto h-[28rem] my-5 rounded-sm flex flex-col overflow-auto">
            <TableRowsPhone
              name={"يوسف سامح البساطي السيد الكلب"}
              phone={"010101011021"}
              subject={"الرياضيات الوسخه"}
              salary={"100k في الدقيقه"}
              discount={"300"}
            ></TableRowsPhone>
            <TableRowsPhone
              name={"يوسف سامح البساطي السيد الكلب"}
              phone={"010101011021"}
              subject={"الرياضيات الوسخه"}
              salary={"100k في الدقيقه"}
              discount={"300"}
            ></TableRowsPhone>
            <TableRowsPhone
              name={"يوسف سامح البساطي السيد الكلب"}
              phone={"010101011021"}
              subject={"الرياضيات الوسخه"}
              salary={"100k في الدقيقه"}
              discount={"300"}
            ></TableRowsPhone>
          </div>
        </div>
      </div>
      {/* end of body & start of sidebar ------------------------------------------------------*/}
      <div className="bg-[#fefefe] row-span-3 drop-shadow-xl flex flex-col">
        <Image
          src={"/ahaha.jpg"}
          height={0}
          width={0}
          className="rounded-full w-[5rem] h-[5rem] mx-auto mt-10 mb-[5rem] hidden md:block"
        ></Image>
        <div className="flex justify-end mr-4">
          <div className="flex-col items-end flex mt-[10rem] md:mt-0 gap-3 text-[21px]">
            <button
              className={`flex items-center gap-2 rounded-l-lg p-[1px] cursor-pointer transition-sm hover:bg-[#ff7000] hover:text-white hover:opacity-[100%] pl-2 ${
                page == 1
                  ? "opacity-[100%] bg-[#00b9ff] text-white "
                  : "opacity-[50%]"
              }`}
              onClick={() => {
                setPage(1);
              }}
            >
              <p className="hidden md:block">المعلمون</p>
              <FaChalkboardTeacher className=" " />
            </button>
            <button
              className={`flex items-center gap-2 rounded-l-lg p-[1px] cursor-pointer transition-sm hover:bg-[#e3e3e3] ${
                page == 2 ? "opacity-[100%] " : "opacity-[50%]"
              }`}
              onClick={() => {
                setPage(2);
              }}
            >
              <p className="hidden md:block"> الطلاب</p>
              <PiStudentBold className="" />
            </button>
            <button
              className={`flex items-center gap-2 rounded-l-lg p-[1px] cursor-pointer transition-sm hover:bg-[#e3e3e3] ${
                page == 3 ? "opacity-[100%] " : "opacity-[50%]"
              }`}
              onClick={() => {
                setPage(3);
              }}
            >
              <p className="hidden md:block"> الجداول</p>
              <AiOutlineSchedule className="" />
            </button>
            <button
              className={`flex items-center gap-2 rounded-l-lg p-[1px] cursor-pointer transition-sm hover:bg-[#e3e3e3] ${
                page == 4 ? "opacity-[100%] " : "opacity-[50%]"
              }`}
              onClick={() => {
                setPage(4);
              }}
            >
              <p className="hidden md:block">الاخبار </p>
              <BiNews className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
