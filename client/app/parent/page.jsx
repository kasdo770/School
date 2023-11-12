"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CgProfile } from 'react-icons/cg'
import { Students } from '../components/dashboard-comps/Students'
import Skeleton from '../components/Skeleton'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Loader from '../components/Loader'
export default function page() {
    const [page, setPage] = useState(1);
    const [parent, setparent] = useState("")
    const [uti, setuti] = useState("")
    const [loading, setloading] = useState(false)
    const absent = 4
    const data = [""]
    const router = useRouter();

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
                setparent(data.data)
                setuti(data.data.Utility)
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
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-20 h-fit  " onClick={(() => {
                            setPage(1)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-20 transition-all duration-500 pb-2   ${page == 1 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                البيانات
                            </h1>

                        </button>
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-[7rem] h-fit  " onClick={(() => {
                            setPage(2)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-[7rem]  transition-all duration-500 pb-2   ${page == 2 ? "border-b-[#ff7000] " : "border-b-white border-b-0  w-[8rem]	"
                                }`}>
                                التحذيرات
                            </h1>

                        </button>

                    </div>
                    <div className="flex items-center transition-sm   rounded-sm gap-x-5 ">
                        <h1 className="sm:ml-5 text-[15px] md:text-[21px]">

                            اسكولا
                        </h1>
                        <Image src={"/logo.png"} width={50} height={50} />


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
                                                    {parent.ID}
                                                </dd>

                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                                                <dt class="text-sm font-medium text-gray-500">
                                                    ألاسم
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {uti.name}
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
                    <Skeleton loading={loading} numbers={data} classname={"md:w-[25rem] md:h-[15rem] w-[13rem] h-[12rem]"} ></Skeleton>

                    <div className={`border flex items-center flex-col justify-center gap-y-10  border-blue-300 shadow rounded-md   md:w-[25rem] md:h-[15rem] w-full h-[12rem]  mx-auto ${loading == false ? "block" : "hidden"}`} >

                        <div dir='rtl' className='flex justify-between'>
                            <h1 className='mx-[1rem]mx-5'>اسم الطالب</h1>
                            <h1 className='mx-[1rem]' >عمار خرا</h1>
                        </div>
                        <div dir='rtl' className='flex justify-between'>
                            <h1 className='mx-[1rem]'>الرقم القومي</h1>
                            <h1 className='mx-[1rem]' >69696969696969</h1>
                        </div>
                        <div dir='rtl' className='flex justify-between'>
                            <h1 className='mx-[1rem]'>عدد خضوره</h1>
                            <h1 className={` ${absent > 3 ? "text-red-700 font-bold" : "text-black"}`} >5</h1>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}
