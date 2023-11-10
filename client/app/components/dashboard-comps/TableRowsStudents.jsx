import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function TableRowsStudents(props) {
  const [on, setOn] = useState(false);

  return (
    <TableRow className="">
      <TableCell className="text-right p-5">{props.section}</TableCell>
      <TableCell className="text-right p-5">{props.system}</TableCell>
      <TableCell className="text-right p-5">{props.grade}</TableCell>
      <TableCell className="text-right p-5">{props.warnings}</TableCell>
      <TableCell className="text-right p-5">{props.class}</TableCell>

      <TableCell className="text-right p-5">{props.id}</TableCell>
      <TableCell
        className="font-medium Cairo justify-start items-center flex gap-2 p-5"
        dir="rtl"
      >
        <button>
          <BiEditAlt
            className="text-[18px] hover:opacity-[60%]"
            onClick={() => {
              setOn(!on);
            }}
          />
        </button>
        {props.name}
      </TableCell>
    </TableRow>
  );
}
