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

export function TeachersEdit() {
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
          <DialogTitle> تعديل بيانات المعلم</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-2 mt-10" dir="rtl">
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right">الاسم الثلاثي</Label>
              <Input id="teachername" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> الرقم القومي</Label>
              <Input id="teacherid" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <Label className="text-right"> رقم الهاتف</Label>
              <Input id="teacherphone" className="col-span-3" />
            </div>
            <div className="flex flex-col">
              <Label className="text-right"> اللقب</Label>
              <Input id="teachertitle" className="col-span-3" />
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-2"></div>
          <Select>
            <SelectTrigger className="w-[13rem] mx-auto mt-2">
              <SelectValue placeholder="المادة " />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="arabic"> عربي</SelectItem>
                <SelectItem value="english">انجليزي</SelectItem>
                <SelectItem value="math">رياضيات</SelectItem>
                <SelectItem value="french">فرنساوي</SelectItem>
                <SelectItem value="chemistry">كيمياء</SelectItem>
                <SelectItem value="physics">فيزياء</SelectItem>
                <SelectItem value="religious teachings">تربية دينية</SelectItem>
                <SelectItem value="art">تربية فنية</SelectItem>
                <SelectItem value="activity?">نشاط؟</SelectItem>
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
