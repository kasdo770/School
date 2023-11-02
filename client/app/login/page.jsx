"use client";
import Image from "next/image";
import React, { useState } from 'react';
import Link from 'next/link'
import { CgProfile } from "react-icons/cg";
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
export default function Home() {
  const [code, setcode] = useState("");
  const [password, setpassword] = useState("");
  const [passerror, setpasserror] = useState("");

  function Validate() {
    if (password && code) {
      setpasserror("")
    }
    else {
      setpasserror("واحدة من الخانات فارغة")
    }
  }
  return (
    <>
      <div className="flex lg:flex-row justify-center lg:justify-end relative items-center  h-screen overflow-hidden w-full">

        <Image src={"/right2.svg"} width={5000}
          height={5000}
          className=" select-none h-full w-auto left-0  z-[-1] absolute hidden lg:block " />


        <Image src={"/mobilesignin.png"} width={4000}
          height={5000}
          className="lg:w-[50%] lg:rotate-0  lg:relative z-[-1] absolute m-0 p-0 w-[300%] block lg:hidden bottom-0 h-[16rem] lg:h-screen " />
        <container className=" w-[20rem] mx-auto  md:mx-[6rem] xl:mx-[12rem] bg-transparent">

          <div dir="rtl" className="flex flex-col justify-center lg:justify-start items-center gap-4 my-4">
            <Link href='/' className="hover:cursor-pointer">

              <Image src={"/logo.png"} width={50} height={50} />
            </Link>

          </div>

          <div dir="rtl" className="flex justify-start flex-col  ">
            <h1 className="flex justify-start text-4xl font-black mb-10">اهلا بك الى اكسولا </h1>
            <section className='flex mt-5 mb-1 w-full z-[2] text-[20px] p-[7px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
              <CgProfile className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

              <input value={code} onChange={(e) => { setcode(e.target.value) }} placeholder="الرقم القومي" className="px-2 text-sm w-full outline-none border-0 bg-transparent ">
              </input>
            </section>
            <section className='flex mt-5 mb-1 w-full z-[2] text-[20px] p-[7px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
              <FaHashtag className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

              <input value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="كلمة المرور" className="px-2 w-full text-sm outline-none border-0 bg-transparent ">
              </input>
            </section>
            {passerror && (
              <label
                className={`font-semibold text-sm text-red-600 ml-4`}
              >
                {passerror}
              </label>
            )}
            <section className="flex justify-center">
              <Link href='/register' className="flex justify-start text-[#757982] border-b-[1px] border-[#686b74] p-1 hover:text-[#9196a1] hover:cursor-pointer ">
                <text>انشاء مدرسة</text>
              </Link>
            </section>
            <button onClick={Validate} className="w-full rounded-lg border-[1px] z-[2] bg-[#FE7900] p-2 mb-4 text-white hover:bg-[#FD8D00] active:bg-[#FEAA00] hover:text-white text-extrabold mt-5 text-lg border-none">تاكيد</button>




          </div>



        </container>
      </div>
      <button onClick={Validate} className="absolute right-10 bottom-10 bg-[#FE7900] p-3 rounded-full hover:bg-[#FD8D00] active:bg-[#FEAA00]  ">
        <AiOutlineSearch className="text-white w-5 h-5" />
      </button>
    </>
  )
}
