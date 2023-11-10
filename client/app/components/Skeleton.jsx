import React from 'react'

export default function Skeleton({ loading, numbers }) {
    return (

        <>
            {numbers.map(function (n, i) {
                return (
                    <div key={i}>
                        <div class="border border-blue-300 shadow rounded-md  md:w-[25rem] md:h-[15rem] w-[13rem] h-[12rem]  mx-auto">
                            <div class={`animate-pulse p-10 ${loading == true ? "block" : "hidden"}`}>
                                <div class="grid grid-cols-3 gap-x-4 gap-y-12">
                                    <div class="h-2 bg-slate-400 rounded col-span-3"></div>
                                    <div class="h-2 bg-slate-400 rounded col-span-3"></div>
                                    <div class="h-2 bg-slate-400 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-400 rounded col-span-1"></div>
                                    <div class="h-2 bg-slate-400 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-400 rounded col-span-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
