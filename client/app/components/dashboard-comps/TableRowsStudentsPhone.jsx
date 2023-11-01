import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function TableRowsStudentsPhone(props) {
  const [on, setOn] = useState(false);

  return (
    <div className="bg-[#f2f1f6] break-all" dir="rtl">
      <div className="grid grid-rows-5 pt-3 gap-3 text-[16px] bg-gray-100 border-2 rounded-sm mb-5 bg-white">
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold">الاسم</p>
          <p className="">{props.name}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[3rem] font-bold">الرقم القومي </p>
          <p className=""> {props.id}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold">رقم الهاتف</p>
          <p className=""> {props.phone}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold"> المرحلة</p>
          <p className=""> {props.grade}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold"> النظام التعليمي</p>
          <p className=""> {props.system}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold"> الشعبة</p>
          <p className=""> {props.section}</p>
        </div>
      </div>
    </div>
  );
}
