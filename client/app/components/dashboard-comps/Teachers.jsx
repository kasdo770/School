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

export function TeacherTables() {
  return (
    <>
      <Table className="bg-white sm:w-[90%] mx-auto my-5 hidden lg:table">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">المادة</TableHead>
            <TableHead className="text-right"> اللقب</TableHead>
            <TableHead className="text-right">رقم الهاتف</TableHead>
            <TableHead className="text-right">الرقم القومي </TableHead>
            <TableHead className="text-right">الاسم</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"12345678912345"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>{" "}
          <TableRows
            name={"يوسف سامح البساطي السيد الكلب"}
            id={"010101010101011021011021"}
            phone={"010101011021"}
            title={" التعبان ابو عين واحده "}
            subject={"عربييييييييييييييييييي"}
          ></TableRows>
        </TableBody>
      </Table>

      <div className="bg-white block lg:hidden w-[90%] mx-auto h-[80%] my-5 rounded-sm flex flex-col">
        <TableRowsPhone
          name={"يوسف سامح البساطي السيد الكلب"}
          id={"010101010101011021011021"}
          phone={"010101011021"}
          title={" التعبان ابو عين واحده "}
          subject={"عربييييييييييييييييييي"}
        ></TableRowsPhone>
        <TableRowsPhone
          name={"يوسف سامح البساطي السيد الكلب"}
          id={"010101010101011021011021"}
          phone={"010101011021"}
          title={" التعبان ابو عين واحده "}
          subject={"عربييييييييييييييييييي"}
        ></TableRowsPhone>
        <TableRowsPhone
          name={"يوسف سامح البساطي السيد الكلب"}
          id={"010101010101011021011021"}
          phone={"010101011021"}
          title={" التعبان ابو عين واحده "}
          subject={"عربييييييييييييييييييي"}
        ></TableRowsPhone>
        <TableRowsPhone
          name={"يوسف سامح البساطي السيد الكلب"}
          id={"010101010101011021011021"}
          phone={"010101011021"}
          title={" التعبان ابو عين واحده "}
          subject={"عربييييييييييييييييييي"}
        ></TableRowsPhone>
      </div>
    </>
  );
}
