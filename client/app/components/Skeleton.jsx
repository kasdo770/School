import React from "react";

export default function Skeleton({ loading, numbers, classname }) {
    return (
        <>
            {numbers.map((i) => (
                <div key={i}>
                    <div
                        class={`shadow-lg py-2 rounded-md ${classname} mx-auto ${loading == true ? "block" : "hidden"
                            }`}
                    >
                        <div class={`animate-pulse p-10`}>
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
            ))}
        </>
    );
}
