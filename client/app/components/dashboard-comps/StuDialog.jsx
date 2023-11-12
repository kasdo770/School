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
  SelectLabel,
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

export function StudentDialog() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setloading] = useState(false)
  const [name, setname] = useState("")
  const [code, setcode] = useState("")

  const [kidpassword, setkidpassword] = useState("")
  const [daddypassword, setdaddypassword] = useState("")

  const [daddyjob, setdaddyjob] = useState("")
  const [daddycode, setdaddycode] = useState("")
  const [grade, setgrade] = useState(1)
  const [division, setdivision] = useState("3lmymath")
  const [error, seterror] = useState("")
  const [edusystem, setedusystem] = useState("")
  const [classs, setclasss] = useState("")

  function Validate() {
    const id = localStorage.getItem('token')

    if (name == "" || code == "" || kidpassword == "" || grade == "" || division == "" || edusystem == "" || daddycode == "" || daddyjob == "" || classs == "") {
      seterror("احد الخانات الفارغة")
    }
    else if (code.length !== 14 || daddycode.length !== 14) {
      seterror("الرقم القومي يجب ان يكون مكون من 14 رقم")
    }
    else {
      seterror("")
      console.log(id)
      axios.post('/api/create/users', {
        name: name,
        ID: code,
        role: "Student",
        password: kidpassword,
        gradename: classs,
        grade: grade,
        Division: division,
        Edusystem: edusystem,
        fatherwork: daddyjob,
        fatherpassword: daddypassword,
        fatherID: daddycode
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
      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="flex items-center gap-2 hover:opacity-[80%] active:opacity-[70%]">
            <p className="hidden md:block">اضافة طالب</p>
            <AiOutlinePlus className="text-[19px] md:text-md mx-auto md:mx-0" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle> اضافة طالب</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2" dir="rtl">
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right">الاسم الثلاثي</Label>
              <Input value={name} setdata={setname} id="studentname" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> الرقم القومي</Label>
              <Input value={code} setdata={setcode} id="studentid" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right"> وظيفة الوالد</Label>
              <Input value={daddyjob} setdata={setdaddyjob} id="fatherjob" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> رقم الوالد القومي</Label>
              <Input value={daddycode} setdata={setdaddycode} id="fatherid" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right"> رمز الطالب</Label>
              <Input value={kidpassword} setdata={setkidpassword} id="studentcode" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> رمز الوالد</Label>
              <Input value={daddypassword} setdata={setdaddypassword} id="fathercode" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-2">
            <select data-te-select-init value={division} onChange={(e) => { setdivision(e.target.value) }} className="w-[12rem] flex h-10 items-center justify-between rounded-md border border-input bg-background px-3  text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ">
              <option value="علمي علوم"> علمي علوم</option>
              <option value="علمي رياضة">علمي رياضة</option>
              <option value="ادبي">ادبي</option>
              <option value="علمي">علمي</option>
              <option value="لا يوجد بعد">لا يوجد بعد</option>
            </select>
            <select value={grade} onChange={(e) => { setgrade(e.target.value) }} className="w-[12rem] flex h-10 items-center justify-between rounded-md border border-input bg-background px-3  text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ">
              <option value="اولى ابتدائي">اولى ابتدائي</option>
              <option value="تانية ابتذائي">تانية ابتدائي</option>
              <option value="ثالثة ابتداذي">ثالثة ابتدائي</option>
              <option value="رابعة ابتدائي">رابعة ابتدائي</option>
              <option value="خمسة ابتدائي">خمسة ابتدائي</option>
              <option value="ستة ابتدائي">ستة ابتدائي</option>
              <option value="اولى اعدادي">اولى اعدادي</option>
              <option value="تانية اعدادي">تانية اعدادي</option>
              <option value="تالتة اعدادي">تالتة اعدادي</option>
              <option value="اولى ثانوي">اولى ثانوي</option>
              <option value="تانية ثانوي">تانية ثانوي</option>
              <option value="تالتة ثانوي">تالتة ثانوي</option>

            </select>
          </div>
          <div className="flex items-center justify-evenly mt-2">
            <select value={edusystem} onChange={(e) => { setedusystem(e.target.value) }} className="w-[12rem] flex h-10 items-center justify-between rounded-md border border-input bg-background px-3  text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ">
              <option disabled>نظام تعليمي</option>
              <option value="انتظام">انتظام</option>
              <option value="خدمات">خدمات</option>

            </select>
            <select value={classs} onChange={(e) => { setclasss(e.target.value) }} className="w-[12rem] flex h-10 items-center justify-between rounded-md border border-input bg-background px-3  text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ">
              <option disabled>الصف</option>
              <option value="اول">اول</option>
              <option value="تاني">تاني</option>
              <option value="ثالث">ثالث</option>
              <option value="رابع">رابع</option>
              <option value="خامس">خامس</option>
              <option value="سادس">سادس</option>
              <option value="سابع">سابع</option>
              <option value="ثامن">ثامن</option>
              <option value="تاسع">تاسع</option>
              <option value="عاشر">عاشر</option>


            </select>

          </div>

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
      {loading ? (<Loader />) : ('')}

    </Dialog>

  );
}
