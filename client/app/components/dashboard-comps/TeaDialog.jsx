"use client"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@radix-ui/themes";
import Input from "../Input";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import React, { useState } from 'react';

import { useSnackbar } from "notistack";
import Loader from '../Loader';
export function TeacherDialog() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setloading] = useState(false)
  const [name, setname] = useState("")
  const [code, setcode] = useState("")

  const [password, setpassword] = useState("")
  const [teachertitle, setteachertitle] = useState("")
  const [salary, setsalary] = useState("")
  const [discount, setdiscount] = useState([])
  const [subject, setsubject] = useState("arabic")
  const [error, seterrror] = useState("")

  function Validate() {
    const id = localStorage.getItem('token')

    if (name == "" || code == "" || password == "" || teachertitle == "" || salary == "" || discount == "" || subject == "") {
      seterrror("احد الخانات الفارغة")
    }
    else if (code.length !== 14) {
      seterrror("الرقم القومي يجب ان يكون مكون من 14 رقم")
    }
    else {
      seterrror("")
      console.log(id)
      axios.post('/api/create/users', {
        name: name,
        ID: code,
        role: "Teacher",
        password: password,
        salary: salary,
        jobRole: teachertitle,
        subject: subject,
        paycuts: discount,
      }, {
        headers: {
          'authorization': id
        }
      }).then((e) => {
        console.log(e)
        setloading(false)

        enqueueSnackbar('تم الانشاء بنجاح', { variant: 'success' })
        window.location.reload(true)


      }).catch((e) => {
        setloading(false)
        console.log(e)
        enqueueSnackbar("هذا الاسم او الرقم القومي متسخدم من قبل", { variant: 'error' })

      })

    }
  }
  return (
    <Dialog>
      {loading ? (<Loader />) : ('')}

      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="flex items-center gap-2 hover:opacity-[80%] active:opacity-[70%]">
            <p className="hidden md:block">اضافة معلم</p>
            <AiOutlinePlus className="text-[19px] md:text-md mx-auto md:mx-0" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle> اضافة معلم</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2" dir="rtl">
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right">الاسم الثلاثي</Label>
              <Input value={name} setdata={setname} id="teachername" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> الرقم القومي</Label>
              <Input value={code} setdata={setcode} id="teacherid" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right"> الرمز</Label>
              <Input value={password} setdata={setpassword} id="teachercode" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> اللقب</Label>
              <Input value={teachertitle} setdata={setteachertitle} id="teachertitle" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right"> الراتب</Label>
              <Input value={salary} setdata={setsalary} id="teachersalary" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> الخصم</Label>
              <Input value={discount} setdata={setdiscount} id="teacherdiscount" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-2"></div>
          <select data-te-select-init value={subject} onChange={(e) => { setsubject(e.target.value) }} className="w-[13rem] mx-auto mt-2">
            <option value="arabic"> عربي</option>
            <option value="english">انجليزي</option>
            <option value="math">رياضيات</option>
            <option value="french">فرنساوي</option>
            <option value="chemistry">كيمياء</option>
            <option value="physics">فيزياء</option>
            <option value="religious teachings">تربية دينية</option>
            <option value="art">تربية فنية</option>
            <option value="activity?">نشاط؟</option>
          </select>
          {error && (
            <label
              className={`font-semibold text-sm text-red-600 ml-4`}
            >
              {error}
            </label>
          )}
        </div>

        <DialogFooter>
          <button
            type="submit"
            onClick={Validate}

            className="border-2 border-black rounded-sm p-1 text-sm hover:bg-gray-200 active:bg-gray-300"
          >
            اضافة
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
