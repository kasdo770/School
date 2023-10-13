import React from 'react'

export default function Input({ label, type, InputClass, min, max, setdata, data, error, required }) {
    return (
        <>
            <div dir='rtl' className='flex flex-col mt-2 mb-1 w-full z-[2]'>
                <label className="">{label}</label>
                <input
                    onChange={(e) => { setdata(e.target.value) }}
                    value={data}
                    min={min}
                    max={max}
                    type={type}
                    required
                    className='border-0 bg-transparent border-b-2 border-black p-1 mb-1  ' >

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
