"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CgProfile } from 'react-icons/cg'
import Skeleton from '../components/Skeleton'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Loader from '../components/Loader'
export default function page() {
    const router = useRouter();
    const [students, setstudents] = useState("")
    const [uti, setuti] = useState("")
    const [reports, setreports] = useState([])
    useEffect(() => {
        setloading(true)
        const id = localStorage.getItem('token')
        let response = axios.get(`/api/get/user`,
            {
                headers: {
                    'authorization': id
                }
            }).then((data) => {
                setloading(false)
                console.log(data.data)
                setuti(data.data.Utility)
                setreports(data.data.Report)
                setstudents(data.data)

            });
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
    }, [])

    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(false)
    const absent = 4
    const data = [""]
    return (
        <>
            {loading ? (<Loader />) : ('')}

            <div className="flex flex-col w-full text-white bg-white">
                <div className="bg-[#009DD8] border-r-[1px] flex justify-between items-center p-3">
                    <a
                        href="/"
                        className="ml-5 sm:ml-8 bg-[#C16514] p-2 rounded-lg hover:opacity-[60%] transition-sm"
                    >
                        العودة                     </a>

                    <div className="flex items-center transition-sm gap-x-4 ">
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-[7rem] h-fit  " onClick={(() => {
                            setPage(2)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-[7rem]  transition-all duration-500 pb-2  ${page == 2 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                التحذيرات
                            </h1>

                        </button>
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-20 h-fit  " onClick={(() => {
                            setPage(1)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-20 transition-all duration-500 pb-2   ${page == 1 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                بياناتك
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
                    <div>

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
                                                    {students.ID}
                                                </dd>

                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                                                <dt class="text-sm font-medium text-gray-500">
                                                    ألاسم
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {students.name}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    الشعبة
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.Division}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    نظام التعليم
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.Edusystem}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    المرحلة
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.grade}
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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden'>

                        {reports.map(i => (
                            <div className={`${loading == false ? "block" : "hidden"}`}>
                                <div key={i} class="border border-blue-300 shadow rounded-md  md:w-[25rem] md:h-[15rem] w-[13rem] h-[12rem]  mx-auto">
                                    <div class="py-3 sm:py-5 grid grid-cols-3 gap-4 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            وصف
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 mt-0 col-span-2">
                                            {i.description}
                                        </dd>
                                    </div>
                                    <div class="py-3 py-5 grid grid-cols-3 gap-4 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            النوع
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 mt-0 col-span-2">
                                            {i.type}
                                        </dd>
                                    </div>
                                    <div class="py-3 py-5 grid grid-cols-3 gap-4 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            المعاد
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 mt-0 col-span-2">
                                            {i.date}
                                        </dd>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div >
        </>
    )
}
