import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { TeachersEdit } from "./TeaEdit";

export function TableRows(props) {
  const [on, setOn] = useState(false);

  return (
    <TableRow className="">
      <TableCell className="text-right p-5">{props.subject}</TableCell>
      <TableCell className="text-right p-5">{props.title}</TableCell>
      <TableCell className="text-right p-5">{props.salary}</TableCell>
      <TableCell className="text-right p-5">{props.paycuts}</TableCell>

      <TableCell className="text-right p-5">{props.id}</TableCell>
      <TableCell className="font-medium p-5 flex items-center gap-2" dir="rtl">
        <TeachersEdit />
        {props.name}
      </TableCell>
    </TableRow>
  );
}
