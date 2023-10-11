import Image from "next/image";
import { AiOutlineDownCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Home() {
  return (
    <div className="">
      {/*top*/}

      {/*top-nav*/}
      <div className="w-full h-screen gradient">
        <Image
          src={"/ahaha.jpg"}
          width={5000}
          height={5000}
          className="w-full h-full z-[-8] absolute object-cover brightness-[70%] h-screen"
        ></Image>

        <div
          dir="rtl"
          className="flex justify-between items-center mx-2 sm:mx-5 lg:mx-20 text-[16px] sm:text-[18px] lg:text-[21px] text-white"
        >
          <p className="text-[24px] sm:text-[29px] lg:text-[35px] font-bold mt-4">
            اسكولا
          </p>
          <RxHamburgerMenu className="mt-4 text-[24px] sm:hidden"></RxHamburgerMenu>
          <div className="mt-4 hidden sm:flex">
            <p className="ml-5 sm:ml-8"> الصفحة الرئيسية</p>
            <p className="ml-5 sm:ml-8"> الصفحة الصفحه</p>
            <p> انضم لنا</p>
          </div>
        </div>
        {/*top-text*/}
        <div className="flex flex-col justify-center items-center h-full mt-[-3rem]">
          <p className="font-bold text-[25px] md:text-[30px] lg:text-[40px] mb-4 text-white">
            ما هو اسكولا ؟
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
          <AiOutlineDownCircle></AiOutlineDownCircle>
        </div>
      </div>
      {/*end of top*/}
      {/*--------------------------------------------------------*/}
      {/*midsection*/}
      <div className="mt-[10rem] md:mt-[7rem] text-center text-[30px]">
        ليه اسكولا؟
      </div>
      <div className="my-[6rem]">
        <div className="flex">
          <Image></Image>
          <div></div>
        </div>
        <div className="flex">
          <Image></Image>
          <div></div>
        </div>
        <div className="flex">
          <Image></Image>
          <div></div>
        </div>
      </div>
    </div>
  );
}
