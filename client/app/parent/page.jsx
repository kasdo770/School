"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CgProfile } from 'react-icons/cg'
import { Students } from '../components/dashboard-comps/Students'
import Skeleton from '../components/Skeleton'
export default function page() {
    const [page, setPage] = useState(1);
    const [loading, setloading] = useState(false)
    return (
        <>
            <div className="flex flex-col w-full text-white bg-white">
                <div className="bg-[#009DD8] border-r-[1px] flex justify-between items-center p-3">
                    <button className="flex items-center gap-1 hover:text-[#ff7000] active:text-[#ff6f00da]">
                        <h1 className="sm:ml-5 text-[15px] md:text-[18px]">
                            بياناتك
                        </h1>
                        <CgProfile className='w-7 mx-1 mt-1 h-7' />

                    </button>

                    <div className="flex items-center transition-sm gap-x-4 ">
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-20 h-fit  " onClick={(() => {
                            setPage(1)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-20 transition-all duration-500   ${page == 1 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                بياناتك
                            </h1>

                        </button>
                        <button className="flex items-center gap-1 hover:text-[#d3d3d3] w-20 h-fit  " onClick={(() => {
                            setPage(2)
                        })}>
                            <h1 className={`sm:ml-5 text-[15px] md:text-[18px] border-b-[4px] w-20  transition-all duration-500  ${page == 2 ? "border-b-[#ff7000] 	 w-20" : "border-b-white border-b-0 w-0 	"
                                }`}>
                                بياناتك
                            </h1>

                        </button>

                    </div>
                    <div className="flex items-center transition-sm   rounded-sm ">
                        <h1 className="sm:ml-5 text-[15px] md:text-[21px]">

                            اسكولا
                        </h1>
                        <Link href='/' className="hover:cursor-pointer ml-3">

                            <Image src={"/logo.png"} width={50} height={50} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" overflow-auto flex justify-center mt-10">
                <div className={`${page == 1 ? "block" : "hidden"} `}>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden'>
                        <Skeleton loading={loading} numbers={4} ></Skeleton>






                    </div>
                </div>
                <div className={`${page == 2 ? "block" : "hidden"}`}>
                    <Students />
                </div>
            </div >
        </>
    )
}
