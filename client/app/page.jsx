import Image from "next/image";
import {
  AiOutlineDownCircle,
  AiOutlineSecurityScan,
  AiOutlineUser,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSpeedometer } from "react-icons/bs";
import { SlOrganization } from "react-icons/sl";
import { FaSchool } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      {/*top*/}
      <div className="w-full h-screen gradient">
        <Image
          src={"/ahaha.jpg"}
          width={5000}
          height={5000}
          className="w-full z-[-1] absolute top-0 object-cover brightness-[70%] h-screen"
        ></Image>
        <div
          dir="rtl"
          className="flex justify-between items-center mx-2 sm:mx-5 xl:mx-[8rem] text-[16px] sm:text-[18px] lg:text-[21px] text-white 2xl:max-w-[80%]"
        >
          <div className="flex justify-center mt-4">
            <Image src={"/logo.png"} width={35} height={10} className="h-10 mt-2 ml-3 bg-white rounded-full" />
            <p className="text-[24px] sm:text-[29px] lg:text-[35px] font-bold ">

              سكولا
            </p>
          </div>

          <div className="mt-4 flex">
            <a
              href="login"
              className="ml-5 sm:ml-8 bg-[#C16514] px-1 rounded-lg hover:opacity-[60%] transition-sm"
            >
              سجل دخولك
            </a>
            <a
              href="register"
              className=" bg-[#3D8BA1] px-1 rounded-lg hover:opacity-[60%] transition-sm"
            >
              انضم لينا
            </a>
          </div>
        </div>
        {/*top-text*/}
        <div className="flex flex-col justify-center items-center h-full mt-[-3rem]">
          <p className="font-bold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] mb-4 text-white">
            ما هو سكولا ؟
          </p>
          <p
            dir="rtl"
            className="text-[19px] md:text-[23px] text-center w-[80%] md:w-[60%] lg:w-[50%] text-white"
          >
            تواجه بعض المدارس الكبيرة عدة مشاكل من الناحية التنظيمية والتي نهدف
            الي حلها هنا في اسكولا بأقل تكلفة وسهولة تامة.
          </p>
        </div>
        <div className="flex justify-center text-[40px] md:text-[50px] text-white mt-[-8rem]">
          <a href="#why?">
            <AiOutlineDownCircle className="animate-pulse"></AiOutlineDownCircle>
          </a>
        </div>
      </div>
      {/*end of top*/}
      {/*--------------------------------------------------------*/}
      {/*midsection*/}
      <div className="bg-[#F5FFFA]">
        <div className="pt-[7rem] lg:mx-[2rem] 2xl:max-w-[80%] 2xl:mx-auto ">
          <p
            className="text-center text-[28px] sm:text-[34px] lg:text-[50px] font-bold mb-[6rem]"
            id="why?"
          >
            طب ليه نختار سكولا فوق النظام الطبيعي؟
          </p>
          <div
            dir="rtl"
            className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-around xl:mx-10"
          >
            <div dir="rtl" className=" flex flex-col gap-[4rem]">
              <div className="flex flex-col w-[20rem] sm:w-[30rem]">
                <AiOutlineSecurityScan className="text-[36px]"></AiOutlineSecurityScan>
                <h1 className="text-[20px] sm:text-[25px] font-bold">
                  نظام حماية متقن
                </h1>
                <p className="text-[15px] sm:text-[20px]">
                  التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات
                  الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق
                </p>
              </div>
              <div className="flex flex-col w-[20rem] sm:w-[30rem]">
                <BsSpeedometer className="text-[30px]"></BsSpeedometer>
                <h1 className="text-[20px] sm:text-[25px] font-bold">
                  سرعة في العمل
                </h1>
                <p className="text-[15px] sm:text-[20px]">
                  التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات
                  الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق
                </p>
              </div>

              <div className="flex flex-col w-[20rem] sm:w-[30rem]">
                <SlOrganization className="text-[30px]"></SlOrganization>
                <h1 className="text-[20px] sm:text-[25px] font-bold">
                  انظمة متكاملة وسهلة
                </h1>
                <p className="text-[15px] sm:text-[20px]">
                  التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات
                  الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق
                </p>
              </div>
            </div>
            <Image
              src={"/pic2.jpg"}
              width={5000}
              height={5000}
              className="w-[80%] md:w-[32rem] xl:w-[38rem] rounded-[2rem] h-[25rem] md:h-[40rem] object-fill mt-10 lg:mt-0"
            ></Image>
          </div>
        </div>
        {/*lower-midsection*/}
        <div className="mt-[7rem] mb-20 2xl:max-w-[80%] 2xl:mx-auto">
          <p
            dir="rtl"
            className="text-[30px] sm:text-[34px] lg:text-[40px] font-bold text-center"
          >
            ابدأ دلوقتي!
          </p>
          <div className="mt-20 flex flex-col xl:flex-row items-center justify-evenly gap-20 xl:gap-0">
            <div
              dir="rtl"
              className="flex flex-col justify-center items-center h-[30rem] bg-[#ffffff] border-t-[3px] border-[#00b9ff] rounded-sm"
            >
              <AiOutlineUser className="text-[60px] my-20"></AiOutlineUser>
              <h1 className="text-[26px] font-bold mb-5 text-center">مستخدم</h1>
              <p className="text-[18px] w-[25rem] text-center">
                حسابك عند المدرسة الخاصه بيك.. سواء كنت طالب او معلم او ولي امر.
              </p>
              <a
                href="login"
                className="bg-[#00b9ff] rounded-sm p-2 text-white my-10 hover:opacity-[60%] transition-sm"
              >
                سجل دخولك
              </a>
            </div>
            <div
              dir="rtl"
              className="flex flex-col justify-center items-center h-[30rem] bg-[#ffffff] border-t-[3px] border-[#ff7000] rounded-sm"
            >
              <FaSchool className="text-[60px] my-20"></FaSchool>
              <h1 className="text-[26px] font-bold mb-5 text-center">مدرسة</h1>
              <p className="text-[18px] w-[25rem] text-center">
                انشاء حساب مدرسة.. فقط بواسطة المدير الخاص بها.
              </p>
              <a
                href="register"
                className="bg-[#ff7000] rounded-sm p-2 text-white my-10 hover:opacity-[60%] transition-sm"
              >
                انشئ حساب مدرسة
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[30px] sm:text-[34px] lg:text-[40px] font-bold text-center mb-20">
            مش فاهم؟
          </h1>
          <div className="w-[25rem] h-[15rem] bg-[gray] mx-auto mb-[10rem]"></div>
        </div>
        <footer className="bg-[#111111] h-[10rem] w-full">
          <h1 className="text-center text-[30px] text-white font-bold pt-[1rem]">
            سكولا
          </h1>
          <div className="flex items-center justify-center text-white gap-1 mt-2">
            <BiLogoGmail className="text-[25px]"></BiLogoGmail>
            <p>schola2023@gmail.com</p>
          </div>
          <div className="bg-[#000000]"></div>
        </footer>
      </div>
    </div>
  );
}
