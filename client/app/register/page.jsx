"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineLock } from 'react-icons/ai'
import Link from "next/link";
export default function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [emerror, setemerror] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [passerror, setpasserror] = useState("");
  function Validate() {

    if (password != "" && confirmpass != "" && name != "" && email != "") {
      if (password != confirmpass) {
        setpasserror("كلنة المرور ليست متطابقة")
      }
      else {
        setpasserror("")
      }
      if (!email.includes("@") || !email.includes(".")) {
        setemerror("هذا الايميل خطا")
      }
      else {
        setemerror("")
      }
    }
    else {
      setpasserror("واحدة من الخانات فارغة")
    }
    if (passerror == "" && emerror == "") {
      //send data
    }
  }
  return (
    <div className="flex lg:flex-row justify-center lg:justify-between  h-screen overflow-hidden">
      <Image src={"/right4.png"} width={4000}
        height={5000}
        className="lg:w-[70%] lg:rotate-0  -rotate-90 lg:relative z-[-1] absolute m-0 p-0 hidden lg:block lg:h-screen " />
      <Image src={"/mobilesignin.png"} width={4000}
        height={5000}
        className="lg:w-[50%] lg:rotate-0  lg:relative z-[-1] absolute m-0 p-0 w-[300%] block lg:hidden bottom-0 h-[16rem] lg:h-screen " />
      <container className="h-max w-max mx-auto  md:mx-[6rem] xl:mx-[12rem] bg-transparent">

        <div dir="rtl" className="flex justify-center lg:justify-start items-center gap-4 mt-10 ">
          <Image src={"/logo.png"} width={60} height={60} />
          <h1 className=" text-2xl font-bold">اسكولا</h1>

        </div>

        <div dir="rtl" className="flex justify-start flex-col items-end  mt-[60%]  ">
          <h1 className="flex justify-start text-4xl font-black mb-10">اهلا بك الى اسكولا</h1>
          <section className='flex mt-5 mb-1 w-full z-[2] text-[20px] p-[5px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <CgProfile className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input placeholder="أسم المدرسة" className="px-2 text-sm w-full outline-none border-0 bg-transparent ">
            </input>
          </section>
          <section className='flex mt-5 mb-1 w-full z-[2] text-[20px] p-[5px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <FaHashtag className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input placeholder="الرقم القومي" className="px-2 w-full text-sm outline-none border-0 bg-transparent ">
            </input>
          </section>
          <section className='flex group mt-5 mb-1 w-full z-[2] text-[20px] p-[5px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <AiOutlineLock className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input placeholder="كلمة المرور" className="px-2 w-full text-sm outline-none border-0 bg-transparent focus:border-dotted ">
            </input>
          </section>
          <section className="flex justify-center">
            <Link href='/login' className="flex justify-start text-[#757982] border-b-[1px] border-[#686b74] p-1 hover:text-[#9196a1] hover:cursor-pointer ">
              <text>لديك حساب؟</text>
            </Link>
          </section>
          <button onClick={Validate} className="w-full rounded-lg border-[1px] z-[2] bg-[#FE7900] p-2 mb-4 text-white hover:bg-[#FD8D00] active:bg-[#FEAA00] hover:text-white text-extrabold mt-5 text-lg border-none">تاكيد</button>




        </div>



      </container>
    </div>
  )
}
