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

export function TableRows(props) {
  const [on, setOn] = useState(false);

  return (
    <TableRow className="">
      <TableCell className="text-right p-5">{props.subject}</TableCell>
      <TableCell className="text-right p-5">{props.title}</TableCell>
      <TableCell className="text-right p-5">{props.phone}</TableCell>
      <TableCell className="text-right p-5">{props.id}</TableCell>
      <TableCell className="font-medium p-5 flex items-center gap-2" dir="rtl">
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
