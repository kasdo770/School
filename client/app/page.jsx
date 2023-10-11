import Image from "next/image";
import { AiOutlineDownCircle } from "react-icons/ai";

export default function Home() {
  return (
    <div className="font-serif">
      {/*top*/}
      <Image
        src={"/ahaha.jpg"}
        width={5000}
        height={5000}
        className="w-full h-full z-[-8] absolute top-0 object-cover brightness-[70%]"
      ></Image>
      <div className="h-screen w-full top-0 absolute z-[-1] gradient"></div>
      {/*top-nav*/}
      <div
        dir="rtl"
        className="flex justify-between items-center mx-2 sm:mx-5 lg:mx-20 mt-4 text-[16px] sm:text-[18px] lg:text-[21px] text-white"
      >
        <p className="text-[24px] sm:text-[29px] lg:text-[35px] font-bold">
          اسكولا
        </p>
        <div className="flex">
          <p className="ml-5 sm:ml-8"> الصفحة الرئيسية</p>
          <p className="ml-5 sm:ml-8"> الصفحة الصفحه</p>
          <p> انضم لنا</p>
        </div>
      </div>
      {/*top-text*/}
      <div className="flex justify-center">
        <p className="font-bold text-[25px] md:text-[30px] lg:text-[40px] text-center mb-4 mt-[28%] sm:mt-[18%] md:mt-[15%] lg:mt-[14%] text-white">
          ما هو اسكولا ؟
        </p>
      </div>
      <div className="flex justify-center">
        <p
          dir="rtl"
          className="text-[19px] md:text-[23px] text-center w-[80%] md:w-[60%] lg:w-[50%] text-white"
        >
          تواجه بعض المدارس الكبيرة عدة مشاكل من الناحية التنظيمية والتي نهدف
          الي حلها هنا في اسكولا بأقل تكلفة وسهولة تامة.
        </p>
      </div>
      <div className="flex justify-center text-[40px] md:text-[50px] mt-[5rem] lg:mt-[3rem] xl:mt-[8rem] text-white">
        <AiOutlineDownCircle></AiOutlineDownCircle>
      </div>
      {/*end of top*/}
      {/*--------------------------------------------------------*/}
      {/*midsection*/}
      <div className="mt-[13rem] md:mt-[10rem] text-center text-[30px]">
        ليه تستخدم اسكوزندنداا
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
