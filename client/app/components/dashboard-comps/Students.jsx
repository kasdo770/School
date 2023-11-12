"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRowsStudents } from "./TableRowsStudents";
import { TableRowsStudentsPhone } from "./TableRowsStudentsPhone";

export function Students(data) {
  return (
    <>
      <Table className="bg-white sm:w-[90%] mx-auto my-5 hidden lg:table">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right"> الشعبة</TableHead>
            <TableHead className="text-right"> النظام التعليمي</TableHead>
            <TableHead className="text-right"> المرحلة</TableHead>
            <TableHead className="text-right">التحذيرات</TableHead>
            <TableHead className="text-right">الصف</TableHead>
            <TableHead className="text-right">الرقم القومي</TableHead>
            <TableHead className="text-right">الاسم</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((i) => (
            <TableRowsStudents
              name={i.name}
              warnings={i.warnings ? i.warnings : 0}
              id={i.ID}
              grade={i.Utility.grade}
              class={i.Class.name}
              system={i.Utility.Edusystem}
              section={i.Utility.Division}
            ></TableRowsStudents>
          ))}



        </TableBody>
      </Table>
      <div className="bg-white block lg:hidden w-[90%] mx-auto h-[80%] my-5 rounded-sm flex flex-col">

        {data.data.map((i) => (
          <TableRowsStudentsPhone
            name={i.name}
            warnings={i.warnings ? i.warnings : 0}
            id={i.ID}
            grade={i.Utility.grade}
            class={i.Class.name}
            system={i.Utility.Edusystem}
            section={i.Utility.Division}
          ></TableRowsStudentsPhone>
        ))}
      </div>
    </>
  );
}
