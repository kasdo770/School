"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Skeleton from '../components/Skeleton'
import { useSnackbar } from "notistack";
import Loader from '../components/Loader';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function page() {
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")
    const [code, setcode] = useState("")
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter()
    const [reason, setreason] = useState("")
    const [teacher, setteacher] = useState("")
    const [uti, setuti] = useState("")
    const absent = 4
    const data = [""]
    useEffect(() => {
        try {
            setloading(true)
            const id = localStorage.getItem('token')
            console.log(id)
            axios.get(`/api/verifytoken`, {
                headers: {
                    authorization: id,
                }
            }).catch((e) => {
                if (e) {
                    localStorage.removeItem("token")
                    router.push('/', { scroll: false })
                }
            })
            let response = axios.get(`/api/get/user`,
                {
                    headers: {
                        'authorization': id
                    }
                }).then((data) => {
                    setloading(false)
                    console.log(data.data)
                    setteacher(data.data)
                    setuti(data.data.Utility)
                });
        } catch (error) {
            setloading(false)
            console.error(error);

        }
    }, [])
    function Validate() {
        if (reason == "" || code == "") {
            seterror("احد الخانات فارغة")
        } else if (code.length !== 14) {
            seterror("الرقم القومي يجب ان يكون مكون من 14 رقم")

        }
        else {
            setloading(true)

            axios.post('/api/create/warning', {
                ID: code,
                description: reason,
                type: 'complain',
            }).then((e) => {
                seterror("")
                console.log(e)
                setloading(false)

                if (e.data == "There is no student with that ID") {
                    enqueueSnackbar('هذا الرقم القومي لا يوجد', { variant: 'error' })

                } else {
                    enqueueSnackbar('تم الانشاء بنجاح', { variant: 'success' })

                }


            }).catch((e) => {
                setloading(false)
                enqueueSnackbar('هذا الرقم القومي لا يوجد', { variant: 'error' })

                console.log(e)

            })
        }
    }
    return (
        <>
            <div className="flex flex-col w-full text-white bg-white">
                <div className="bg-[#009DD8] border-r-[1px] flex justify-between items-center p-3">
                    <a
                        href="/"
                        className="ml-0 md:ml-8 bg-[#C16514] p-2 rounded-lg hover:opacity-[60%] transition-sm"
                    >
                        العودة                     </a>

                    <div className="flex items-center transition-sm gap-x-4 ">

                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-[7rem] h-fit  " onClick={(() => {
                            setPage(1)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-[7rem]  transition-all duration-500 pb-2 ${page == 1 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                بياناتك
                            </h1>

                        </button>
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-[7rem] h-fit  " onClick={(() => {
                            setPage(2)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-[7rem]  transition-all duration-500 pb-2  ${page == 2 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                البلاغات
                            </h1>

                        </button>

                    </div>
                    <div className="flex items-center transition-sm   rounded-sm md:gap-x-5 gap-x-2 ">
                        <h1 className="sm:ml-5 text-[12px] md:text-[21px]">

                            اسكولا
                        </h1>
                        <Image src={"/logo.png"} width={50} height={50} className="hidden md:block" />


                    </div>
                </div>
            </div>
            <div className=" overflow-auto flex justify-center mt-10">
                <div className={`${page == 1 ? "block" : "hidden"} `}>
                    <div className='overflow-hidden'>

                        {data.map(i => (
                            <div className={`${loading == false ? "block" : "hidden"}`}>
                                <div key={i} class="border border-blue-300 shadow rounded-md  md:w-[25rem] md:h-max w-[13rem] h-max">
                                    <div dir='rtl' class="border-t border-gray-200 px-4 py-5 sm:p-0">
                                        <dl class="sm:divide-y sm:divide-gray-200">
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    الرقم القومي
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {teacher.ID}
                                                </dd>

                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                                                <dt class="text-sm font-medium text-gray-500">
                                                    ألاسم
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {teacher.name}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    المرتب
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.salary}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    الخصم
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.paycuts}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    المادة
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.subject}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={` ${page == 2 ? "block" : "hidden"}`}>

                    <div class="h-full bg-transperant  flex flex-col justify-center sm:py-8">
                        <div class="relative  sm:max-w-xl sm:mx-auto">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-[#01284F] transition-all to-[#009DD8] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                            </div>
                            <div class="relative px-4 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div class="max-w-md mx-auto">
                                    <div>
                                        <h1 class="text-2xl font-semibold">ارسال بلغات عن الطلاب </h1>
                                    </div>
                                    <div class="divide-y divide-gray-200">
                                        <div class="py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7">
                                            <div dir='rtl' class="relative">
                                                <input value={code} onChange={(e) => { setcode(e.target.value) }} autocomplete="off" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="رقم  القومي   " />
                                                <label for="email" class="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">رقم القومي  </label>
                                            </div>
                                            <div class="relative">
                                                <input value={reason} onChange={(e) => { setreason(e.target.value) }} autocomplete="off" type="text-field" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="السبب" />
                                                <label for="password" class="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">السبب</label>
                                            </div>
                                            {error && (
                                                <label
                                                    className={`font-semibold text-sm text-red-600 ml-4`}
                                                >
                                                    {error}
                                                </label>
                                            )}
                                            <div class="relative flex justify-center">
                                                <button onClick={Validate} class="bg-[#FF7F00] hover:bg-[#e2994f] active:bg-[#c98746] text-white rounded-md px-2 py-1">تسليم</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {loading ? (<Loader />) : ('')}

            </div >
        </>
    )
}
