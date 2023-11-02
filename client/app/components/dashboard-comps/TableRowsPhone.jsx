import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function TableRowsPhone(props) {
  const [on, setOn] = useState(false);

  return (
    <div className="bg-[#f2f1f6]" dir="rtl">
      <div className="flex flex-col text-sm sm:text-[17px] bg-gray-100 border-2 rounded-sm mb-5 bg-white">
        <div className="flex items-center border-b-2 py-5 px-4 sm:px-7 justify-between ">
          <p className="font-bold">الاسم</p>
          <p className="">{props.name}</p>
        </div>
        <div className="flex items-center border-b-2 py-5 px-4 sm:px-7 justify-between  ">
          <p className=" font-bold">الرقم القومي</p>
          <p className=""> {props.id}</p>
        </div>
        <div className="flex items-center border-b-2 py-5 px-4 sm:px-7 justify-between  ">
          <p className=" font-bold">رقم الهاتف</p>
          <p className=""> {props.phone}</p>
        </div>
        <div className="flex items-center border-b-2 py-5 px-4 sm:px-7 justify-between  ">
          <p className=" font-bold"> اللقب</p>
          <p className=""> {props.title}</p>
        </div>
        <div className="flex items-center py-5 border-b-2 px-4 sm:px-7 justify-between ">
          <p className=" font-bold"> المادة</p>
          <p className=""> {props.subject}</p>
        </div>
        <button className="mx-auto py-2 bg-[#00b9ff] text-white active:bg-[#7cd4fc] w-full rounded-b-sm">
          تعديل
        </button>
      </div>
    </div>
  );
}
