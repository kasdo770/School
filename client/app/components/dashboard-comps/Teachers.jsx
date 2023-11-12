"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableRows } from "./TableRows";
import { TableRowsPhone } from "./TableRowsPhone";
import { useState } from 'react'
export function TeacherTables(data) {

  return (
    <>
      <Table className="bg-white sm:w-[90%] mx-auto my-5 hidden lg:table">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">المادة</TableHead>
            <TableHead className="text-right"> اللقب</TableHead>
            <TableHead className="text-right">الراتب</TableHead>
            <TableHead className="text-right">الخصم</TableHead>
            <TableHead className="text-right">الرقم القومي </TableHead>
            <TableHead className="text-right">الاسم</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((i) => (

            <TableRows
              name={i.name}
              id={i.ID}
              salary={i.Utility.salary}
              paycuts={i.Utility.paycuts}
              title={i.Utility.jobRole}
              subject={i.Utility.subject}
            ></TableRows>
          ))}
        </TableBody>
      </Table>

      <div className="bg-white block lg:hidden w-[90%] mx-auto h-[80%] my-5 rounded-sm flex flex-col">
        {data.data.map((i) => (

          <TableRowsPhone
            name={i.name}
            id={i.ID}
            salary={i.Utility.salary}
            paycuts={i.Utility.paycuts}
            title={i.Utility.jobRole}
            subject={i.Utility.subject}
          ></TableRowsPhone>
        ))}

      </div>
    </>
  );
}
