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
      <div className="w-full h-[95vh] md:h-screen gradient">
        <Image
          src={"/ahaha.jpg"}
          width={5000}
          height={5000}
          className="w-full z-[-1] absolute top-0 object-cover brightness-[50%] h-screen"
        ></Image>
        <div
          dir="rtl"
          className="flex justify-between items-center mx-2 sm:mx-5 xl:mx-[8rem] text-[16px] sm:text-[18px] lg:text-[21px] text-white 2xl:max-w-[80%]"
        >
          <div className="flex justify-center items-center mt-4 gap-2 md:gap-4 select-none">
            <Image
              src={"/logo.png"}
              width={500}
              height={500}
              className="w-[2.7rem] h-[2.7rem] sm:w-[3rem] sm:h-[3rem] bg-white rounded-full"
            />
            <p className="text-[20px] sm:text-[29px] font-bold">سكولا</p>
          </div>

          <div className="mt-4 flex text-[13px] md:text-lg select-none">
            <a
              href="login"
              className="ml-5 sm:ml-8 bg-[#C16514] p-2 rounded-lg hover:opacity-[60%] transition-sm"
            >
              سجل دخولك
            </a>
            <a
              href="register"
              className="bg-[#3D8BA1] p-2 rounded-lg hover:opacity-[60%] transition-sm"
            >
              انضم لينا
            </a>
          </div>
        </div>
        {/*top-text*/}
        <div className="flex flex-col justify-center items-center h-full mt-[-3rem]">
          <p className="text-2xl sm:text-4xl mb-4 text-gray-100 font-bold">
            ما هو سكولا ؟
          </p>
          <p
            dir="rtl"
            className="text-lg md:text-2xl text-center w-[90%] md:w-[70%] lg:w-[50%] text-gray-100"
          >
            تواجه بعض المدارس عدة مشاكل من الناحية التنظيمية والتي نهدف الي حلها
            هنا بأقل تكلفة وسهولة تامة.
          </p>
        </div>
        <div className="flex justify-center text-[40px] md:text-[50px] text-white mt-[-8rem] select-none">
          <a href="#why?">
            <AiOutlineDownCircle className="animate-pulse"></AiOutlineDownCircle>
          </a>
        </div>
      </div>
      {/*end of top*/}
      {/*--------------------------------------------------------*/}
      {/*midsection*/}
      <div className="bg-[#FAF9F6]">
        <div className="pt-[7rem] lg:mx-[2rem] 2xl:max-w-[80%] 2xl:mx-auto ">
          <p
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-[6rem]"
            id="why?"
          >
            طب ليه نختار سكولا فوق النظام الطبيعي؟
          </p>
          <div
            dir="rtl"
            className="flex flex-col lg:flex-row items-center justify-between 2xl:justify-around xl:mx-10"
          >
            <div dir="rtl" className=" flex flex-col gap-[4rem]">
              <div className="flex flex-col w-[20rem] sm:w-[30rem] gap-2">
                <AiOutlineSecurityScan className="text-4xl sm:text-5xl"></AiOutlineSecurityScan>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  نظام حماية متقن
                </h1>
                <p className="text-sm sm:text-lg md:text-xl">
                  الطريقة الوحيدة لتتجنب التعاسة في الحياة، هو أن لا يكون لديك
                  وقت فراغ تسأل فيه نفسك هل أنت سعيد أم لا.
                </p>
              </div>
              <div className="flex flex-col w-[20rem] sm:w-[30rem] gap-2">
                <BsSpeedometer className="text-3xl sm:text-4xl"></BsSpeedometer>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  سرعة في العمل
                </h1>
                <p className="text-sm sm:text-lg md:text-xl">
                  الطريقة الوحيدة لتتجنب التعاسة في الحياة، هو أن لا يكون لديك
                  وقت فراغ تسأل فيه نفسك هل أنت سعيد أم لا.
                </p>
              </div>

              <div className="flex flex-col w-[20rem] sm:w-[30rem] gap-2">
                <SlOrganization className="text-3xl sm:text-4xl"></SlOrganization>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  انظمة متكاملة وسهلة
                </h1>
                <p className="text-sm sm:text-lg md:text-xl">
                  الطريقة الوحيدة لتتجنب التعاسة في الحياة، هو أن لا يكون لديك
                  وقت فراغ تسأل فيه نفسك هل أنت سعيد أم لا.
                </p>
              </div>
            </div>
            <Image
              src={"/pic2.jpg"}
              width={5000}
              height={5000}
              className="w-[80%] md:w-[32rem] xl:w-[38rem] rounded-[2rem] h-[25rem] md:h-[40rem] object-fill mt-[4rem] lg:mt-0"
            ></Image>
          </div>
        </div>
        {/*lower-midsection*/}
        <div className="mt-[7rem] mb-20 2xl:max-w-[80%] 2xl:mx-auto">
          <p
            dir="rtl"
            className="text-3xl sm:text-4xl lg:text-5xl mb-[6rem] font-bold text-center"
          >
            ابدأ دلوقتي!
          </p>
          <div className="mt-20 flex flex-col xl:flex-row items-center justify-evenly gap-20 xl:gap-0">
            <div
              dir="rtl"
              className="flex flex-col justify-center items-center w-[22rem] sm:w-[25rem] h-[30rem] bg-[#ffffff] border-t-[3px] border-[#00b9ff] rounded-sm shadow-lg"
            >
              <AiOutlineUser className="text-[60px] my-10"></AiOutlineUser>
              <h1 className="text-[26px] font-bold mb-5 text-center">مستخدم</h1>
              <p className="text-[18px] w-[90%] text-center">
                حسابك عند المدرسة الخاصه بيك.. سواء كنت طالب او معلم او ولي امر.
              </p>
              <a
                href="login"
                className="bg-[#00b9ff] rounded-sm p-2 text-white my-10 hover:opacity-[60%] transition-sm select-none"
              >
                سجل دخولك
              </a>
            </div>
            <div
              dir="rtl"
              className="flex flex-col justify-center items-center w-[22rem] sm:w-[25rem] h-[30rem] bg-[#ffffff] border-t-[3px] border-[#ff7000] rounded-sm shadow-lg"
            >
              <FaSchool className="text-[60px] my-10"></FaSchool>
              <h1 className="text-[26px] font-bold mb-5 text-center">مدرسة</h1>
              <p className="text-[18px] w-[90%] text-center">
                انشاء حساب مدرسة.. فقط بواسطة المدير الخاص بها.
              </p>
              <a
                href="register"
                className="bg-[#ff7000] rounded-sm p-2 text-white my-10 hover:opacity-[60%] transition-sm select-none"
              >
                انشئ حساب مدرسة
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-[6rem]">
            مش فاهم؟
          </h1>
          <div className="w-[22rem] sm:w-[25rem] h-[15rem] bg-gray-200 mx-auto mb-[10rem] flex justify-center items-center">
            <p> .جاري العمل علي فيديو تعليمي</p>
          </div>
        </div>
        <footer className="bg-[#111111] h-[8rem] w-full">
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
