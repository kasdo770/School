import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function TableRowsStudentsPhone(props) {
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
          <p className=" font-bold">التحذيرات</p>
          <p className=""> {props.warnings}</p>
        </div>
        <div className="flex items-center border-b-2 py-5 px-4 sm:px-7 justify-between  ">
          <p className=" font-bold"> الصف</p>
          <p className=""> {props.class}</p>
        </div>
        <div className="flex items-center border-b-2 py-5 px-4 sm:px-7 justify-between  ">
          <p className=" font-bold"> المرحلة</p>
          <p className=""> {props.grade}</p>
        </div>
        <div className="flex items-center py-5 border-b-2 px-4 sm:px-7 justify-between ">
          <p className=" font-bold"> النظام التعليمي</p>
          <p className=""> {props.system}</p>
        </div>
        <div className="flex items-center py-5 border-b-2 px-4 sm:px-7 justify-between ">
          <p className=" font-bold"> الشعبة</p>
          <p className=""> {props.section}</p>
        </div>
        <button className="mx-auto py-2 bg-[#00b9ff] text-white active:bg-[#7cd4fc] w-full rounded-b-sm">
          تعديل
        </button>
      </div>
    </div>
  );
}
