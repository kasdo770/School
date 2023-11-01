import React from 'react'
import Image from 'next/image'
export default function Input({ type, iclassname, imclassname, min, max, setdata, data, error, placeholder, icon }) {
    return (
        <>
            <div dir='rtl' className='flex flex-col mt-2 mb-1 w-full z-[2] text-[20px] p-[5px] outline-none border-solid border-black border-r-0 border-[1px]'>

                <input
                    onChange={(e) => { setdata(e.target.value) }}
                    value={data}
                    min={min}
                    max={max}
                    type={type}
                    placeholder={placeholder}
                    required
                    className={`border-0 bg-transparent border-b-2 border-black p-1 mb-1 ${iclassname} ${error ? "border-red-600 focus:border-red-600" : ""} `} >

                </input>
                {error && (
                    <label
                        className={`font-semibold text-sm text-red-600`}
                    >
                        {error}
                    </label>
                )}
            </div >
        </>
    )
}
