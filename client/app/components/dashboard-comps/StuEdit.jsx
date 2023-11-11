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
import { BiEditAlt } from "react-icons/bi";

export function StudentsEdit() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="hover:opacity-[80%] active:opacity-[70%]">
            <BiEditAlt className="text-[18px] hover:opacity-[60%]" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle> تعديل بيانات الطالب</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2 mt-10" dir="rtl">
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right">الاسم الثلاثي</Label>
              <Input id="studentname" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> الرقم القومي</Label>
              <Input id="studentid" className="col-span-3" />
            </div>
          </div>

          <div className="flex items-center justify-evenly mt-2">
            <Select>
              <SelectTrigger className="w-[12rem]">
                <SelectValue placeholder="الشعبة" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="3lmy3lom">علمي علوم</SelectItem>
                  <SelectItem value="3lmymath">علمي رياضة</SelectItem>
                  <SelectItem value="adab">ادبي</SelectItem>
                  <SelectItem value="3mly">علمي</SelectItem>
                  <SelectItem value="none">لا يوجد بعد</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[12rem]">
                <SelectValue placeholder=" الصف" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="grade1"> 1</SelectItem>
                  <SelectItem value="grade2">2</SelectItem>
                  <SelectItem value="grade3"> 3</SelectItem>
                  <SelectItem value="grade4">4</SelectItem>
                  <SelectItem value="grade5"> 5</SelectItem>
                  <SelectItem value="grade6">6</SelectItem>
                  <SelectItem value="grade7"> 7</SelectItem>
                  <SelectItem value="grade8">8</SelectItem>
                  <SelectItem value="grade9"> 9</SelectItem>
                  <SelectItem value="grade10">10</SelectItem>
                  <SelectItem value="grade11"> 11</SelectItem>
                  <SelectItem value="grade12">12</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Select>
            <SelectTrigger className="w-[13rem] mx-auto mt-2">
              <SelectValue placeholder="نظام التعليم" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="regular"> انتظام</SelectItem>
                <SelectItem value="services">خدمات</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="border-2 border-black rounded-sm p-1 text-sm hover:bg-gray-200 active:bg-gray-300"
          >
            تأكيد
          </Button>
          <Button
            type="submit"
            className="border-2 border-black rounded-sm p-1 text-sm hover:bg-gray-200 active:bg-gray-300"
          >
            حذف
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
