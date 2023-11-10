"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import Link from "next/link";
export default function Home() {
  const [name, setname] = useState("");
  const [code, setcode] = useState("");
  const [codeerror, setcodeerror] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [passerror, setpasserror] = useState("");
  function Validate() {

    if (password != "" && confirmpass != "" && name != "" && code != "") {
      if (password != confirmpass) {
        setpasserror("كلنة المرور ليست متطابقة")
      }
      else {
        setpasserror("")
      }
      if (code.length !== 14) {
        setcodeerror("هذه الرقم يجب اي يكون 14 رقم")
      }
      else {
        setcodeerror("")
      }
    }
    else {
      setpasserror("واحدة من الخانات فارغة")
    }
    if (passerror == "" && codeerror == "") {
      //send data
    }
  }
  return (
    <div dir="rtl" className="flex lg:flex-row justify-center lg:justify-end relative items-center  h-screen overflow-hidden w-full">
      <svg width="566" height="552" viewBox="0 0 566 552" fill="none" filter="hue-rotate(270deg)" xmlns="http://www.w3.org/2000/svg" className=" select-none h-full w-auto right-0  z-[-1] absolute hidden lg:block ">
        <path d="M64 72.1962L175 0H563V552H64L22.5 498.856V420.643L0 356.469L97.5 311.847L86 281.264L188.6 235.139L190 214.082L6.5 140.381L64 72.1962Z" fill="#B673F9" />
        <path d="M251 69L172.5 0H566V552H130L91.5 496.5L213.5 427L113.5 350.5L86 282L228.5 212L91.5 138.5L251 69Z" fill="#A858F7" />
        <path d="M228 69.7468L245.5 0H566V551H265V496.199L185 424.459L277.5 352.222L319 282.475L215 211.731L319 145.472L228 69.7468Z" fill="#983AF4" />
        <path d="M300.667 73.2346L264.053 0H566V552H355.839L247 493.213L275.087 426.455L287.627 355.213L355.839 283.473L300.667 211.235L275.087 137.004L300.667 73.2346Z" fill="#8823E5" />
        <path d="M422.5 71.8049L352.5 0H566V552H403L337 494.157L438 418.862L370.5 277.247L358.5 209.93L370.5 145.106L422.5 71.8049Z" fill="#791ECC" />
        <path d="M414 74.2691V0H566V552H468L451 501.316L432 425.542L496.5 357.796L443.5 283.025L496.5 215.782L486.5 138.502L414 74.2691Z" fill="#6A19B3" />
      </svg>
      <Image src={"/bluewave.png"} width={4000}
        height={5000}
        className="lg:w-[50%] lg:rotate-0  lg:relative z-[-1] absolute m-0 p-0 w-[300%] block lg:hidden bottom-0 h-[16rem] lg:h-screen " />
      <container className=" w-[20rem] mx-auto  md:mx-[6rem] xl:mx-[12rem] bg-transparent">

        <div dir="rtl" className="flex flex-col justify-center lg:justify-start items-center gap-4 my-4">
          <Link href='/' className="hover:cursor-pointer">

            <Image src={"/logo.png"} width={50} height={50} />
          </Link>

        </div>

        <div dir="rtl" className="flex justify-start flex-col items-center ">
          <h1 className="flex justify-start text-4xl font-black mb-10">اهلا بك الى اكسولا </h1>
          <section className='flex mt-5 mb-1 w-full z-[2] text-[20px] p-[7px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <CgProfile className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input value={name} onChange={(e) => { setname(e.target.value) }} placeholder="اسم المدرسة" className="px-2 text-sm w-full outline-none border-0 bg-transparent ">
            </input>
          </section>
          <section className='flex mt-5 mb-1 w-full z-[2] text-[20px] p-[7px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <FaHashtag className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input value={code} onChange={(e) => { setcode(e.target.value) }} placeholder="الرقم القومي" className="px-2 w-full text-sm outline-none border-0 bg-transparent ">
            </input>
          </section>
          {codeerror && (
            <label
              className={`font-semibold text-sm text-red-600 ml-4`}
            >
              {codeerror}
            </label>
          )}
          <section className='flex group mt-5 mb-1 w-full z-[2] text-[20px] p-[7px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <AiOutlineSearch className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="كلمة المرور" className="px-2 w-full text-sm outline-none border-0 bg-transparent focus:border-dotted ">
            </input>
          </section>
          <section className='flex group mt-5 mb-1 w-full z-[2] text-[20px] p-[7px] rounded-md outline-none border-solid items-center border-black  border-[1px]'>
            <AiOutlineSearch className="w-6 h-6 pl-1 border-black border-l-[1px] ml-1" />

            <input value={confirmpass} onChange={(e) => { setconfirmpass(e.target.value) }} placeholder="تاكيد كلمة المرور" className="px-2 w-full text-sm outline-none border-0 bg-transparent focus:border-dotted ">
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
            <Link href='/login' className="flex justify-start text-[#757982] border-b-[1px] border-[#686b74] p-1 hover:text-[#9196a1] hover:cursor-pointer ">
              <text>لديك حساب؟</text>
            </Link>
          </section>
          <button onClick={Validate} className="w-full rounded-lg border-[1px] z-[2] bg-[#006279] p-2 mb-4 text-white hover:bg-[#008298] active:bg-[#0096A8] hover:text-white text-extrabold mt-5 text-lg border-none">تاكيد</button>




        </div>



      </container>
    </div>
  )
}
