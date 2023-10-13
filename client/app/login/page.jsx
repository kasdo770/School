"use client";
import Image from "next/image";
import React, { useState } from 'react';
import Input from "../components/Input";
import Link from 'next/link'

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
    <div className="flex justify-center items-center h-screen">
      <Image src={"/login.png"} width={5000}
        height={5000}
        className="w-full z-[-8] absolute object-cover h-screen brightness-80" />
      <container className="w-[619px] min-h-fit  bg-white shadow-2xl rounded-lg ">
        <div className="flex justify-center items-center ">
          <h1 className="mt-[20px] text-4xl font-extrabold">اسكولا</h1>

        </div>
        <div className="flex justify-center flex-col items-end mx-12 mt-5  ">
          <Input data={code} setdata={setcode} type={'id'} label={"الكود "} />
          <Input data={email} setdata={setemail} type={'email'} label={"الايميل"} />
          <Input error={passerror} data={password} setdata={setpassword} type={'password'} label={"كلمة المرور"} />
          <Link href='/register' className="flex justify-center text-blue-800 border-b-[1px] border-blue-800 p-1 hover:text-blue-600 hover:cursor-pointer z-[2]">
            <text>ليس لديك حساب؟</text>
          </Link>
          <button onClick={validate} className="w-full rounded-lg border-[1px] z-[2] bg-white p-2 text-black hover:bg-orange-200 active:bg-orange-400 hover:text-white text-extrabold mt-10 text-lg border-black">اهلا بك</button>
        </div>
        <div className="flex items-end mt-[-20rem] md:mt-[-35rem]" >
          <Image src={"/orangewave.png"} width={5000} height={100} className="w-full h-auto  z-[1]" />
        </div>


      </container>
    </div>
  )
}
