"use client";
import Image from "next/image";
import React, { useState } from 'react';
import Input from "../components/Input";
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
    <div className="flex justify-center items-center h-screen overflow-auto">
      <Image src={"/register.jpg"} width={5000}
        height={5000}
        className="w-full z-[-8] absolute object-cover h-screen brightness-80" />
      <container className="w-[400px] h-fit  bg-white border-[1px] border-gray-500 rounded-lg">
        <div className="flex justify-center items-center ">
          <h1 className="mt-3 text-2xl font-bold">اسكولا</h1>

        </div>
        <div className="flex justify-center flex-col items-end mx-12 mt-1  ">
          <Input data={name} setdata={setname} type={'text'} label={"اسم المدرسة"} />
          <Input error={emerror} data={email} setdata={setemail} type={'email'} label={"الايميل"} />
          <Input data={password} setdata={setpassword} type={'password'} label={"كلمة المرور"} />
          <Input error={passerror} data={confirmpass} setdata={setconfirmpass} type={'password'} label={"تاكيد كلمة المرور"} />
          <Link href='/login' className="flex justify-center text-blue-800 border-b-[1px] border-blue-800 p-1 hover:text-blue-600 hover:cursor-pointer z-[2]">
            <text>لديك حساب؟</text>
          </Link>
          <button onClick={Validate} className="w-full rounded-lg border-[1px] z-[2] bg-white p-2 mb-4 text-black hover:bg-blue-200 active:bg-blue-400 hover:text-white text-extrabold mt-5 text-lg border-black">تاكيد</button>
        </div>
        <div className="flex items-end h-0 " >
          <Image src={"/bluewave.png"} width={5000} height={100} className="w-full h-auto  mt-[0px] z-[1]" />
        </div>


      </container>
    </div>
  )
}
