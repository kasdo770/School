"use client";
import Image from "next/image";
import React, { useState } from 'react';
import Input from "../components/Signup/Input";
import Link from 'next/link'
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [code, setcode] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passerror, setpasserror] = useState("");

  function validate() {
    if (password && code && email) {
      //send data
    }
    else {
      setpasserror("واحدة من الخانات فارغة")
    }
  }
  return (
    <div className="flex flex-col lg:flex-row justify-between  h-screen overflow-hidden">
      <Image src={"/right2.png"} width={4000}
        height={5000}
        className="lg:w-[50%] lg:rotate-0  -rotate-90 lg:relative z-[-1] absolute m-0 p-0  h-screen  " />
      <container className="h-max w-max  mx-[12rem] bg-transparent">

        <div dir="rtl" className="flex justify-start items-center gap-4 mt-10">
          <Image src={"/logo.png"} width={60} height={60} />
          <h1 className=" text-2xl font-bold">اسكولا</h1>

        </div>

        <div dir="rtl" className="flex justify-start flex-col items-end  mt-44  ">
          <h1 className="flex justify-start text-4xl font-black">اهلا بك الى اسكولا</h1>
          <div className='flex mt-2 mb-1 w-full z-[2] text-[20px] p-[5px] outline-none border-solid items-center border-black  border-[1px]'>
            <AiOutlineSearch className="w-5 h-5 outline-none border-0" />

            <input className="outline-none border-0">
            </input>
          </div>

        </div>



      </container>
    </div>
  )
}
