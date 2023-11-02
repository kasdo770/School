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

export function Students() {
  return (
    <>
      <Table className="bg-white sm:w-[90%] mx-auto my-5 hidden lg:table">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right"> الشعبة</TableHead>
            <TableHead className="text-right"> النظام التعليمي</TableHead>
            <TableHead className="text-right"> المرحلة</TableHead>
            <TableHead className="text-right">رقم الهاتف</TableHead>
            <TableHead className="text-right">الرقم القومي</TableHead>
            <TableHead className="text-right">الاسم</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRowsStudents
            name={"عمر سامح البساطي السيد الكلب"}
            phone={"010101011021"}
            id={"010101011010101011021021"}
            grade={"خامسه ثانةي "}
            system={"سبانكنج  "}
            section={"علمي ادب"}
          ></TableRowsStudents>
          <TableRowsStudents
            name={"عمر سامح البساطي السيد الكلب"}
            phone={"010101011021"}
            id={"010101011010101011021021"}
            grade={"خامسه ثانةي "}
            system={"سبانكنج  "}
            section={"علمي ادب"}
          ></TableRowsStudents>
          <TableRowsStudents
            name={"عمر سامح البساطي السيد الكلب"}
            phone={"010101011021"}
            id={"010101011010101011021021"}
            grade={"خامسه ثانةي "}
            system={"سبانكنج  "}
            section={"علمي ادب"}
          ></TableRowsStudents>
        </TableBody>
      </Table>
      <div className="bg-white block lg:hidden w-[90%] mx-auto h-[80%] my-5 rounded-sm flex flex-col">
        <TableRowsStudentsPhone
          name={"عمر سامح البساطي السيد الكلب"}
          phone={"010101011021"}
          id={"010101011010101011021021"}
          grade={"خامسه ثانةي "}
          system={"سبانكنج  "}
          section={"علمي ادب"}
        ></TableRowsStudentsPhone>
        <TableRowsStudentsPhone
          name={"عمر سامح البساطي السيد الكلب"}
          phone={"010101011021"}
          id={"010101011010101011021021"}
          grade={"خامسه ثانةي "}
          system={"سبانكنج  "}
          section={"علمي ادب"}
        ></TableRowsStudentsPhone>
        <TableRowsStudentsPhone
          name={"عمر سامح البساطي السيد الكلب"}
          phone={"010101011021"}
          id={"010101011010101011021021"}
          grade={"خامسه ثانةي "}
          system={"سبانكنج  "}
          section={"علمي ادب"}
        ></TableRowsStudentsPhone>
        <TableRowsStudentsPhone
          name={"عمر سامح البساطي السيد الكلب"}
          phone={"010101011021"}
          id={"010101011010101011021021"}
          grade={"خامسه ثانةي "}
          system={"سبانكنج  "}
          section={"علمي ادب"}
        ></TableRowsStudentsPhone>
      </div>
    </>
  );
}
