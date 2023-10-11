import Image from "next/image";
import { AiOutlineDownCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Home() {
  return (
    <div className="">
      {/*top*/}
      <div className="w-full h-screen gradient">
        <Image
          src={"/ahaha.jpg"}
          width={5000}
          height={5000}
          className="w-full h-full z-[-8] absolute object-cover brightness-[70%] h-screen"
        ></Image>

        <div
          dir="rtl"
          className="flex justify-between items-center mx-2 sm:mx-5 lg:mx-[8rem] text-[16px] sm:text-[18px] lg:text-[21px] text-white"
        >
          <p className="text-[24px] sm:text-[29px] lg:text-[35px] font-bold mt-4">
            سكولا
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
          <AiOutlineDownCircle></AiOutlineDownCircle>
        </div>
      </div>
      {/*end of top*/}
      {/*--------------------------------------------------------*/}
      {/*midsection*/}
      <div className="mt-[7rem]">
        <p className="text-center text-[50px] font-bold mb-[6rem]">
          طب ليه نختار سكولا فوق النظام الطبيعي؟
        </p>
        <div className="flex items-center justify-between mx-10">
          <Image
            src={"/pic1.jpg"}
            width={5000}
            height={5000}
            className="w-[40rem] rounded-[2rem]"
          ></Image>
          <div dir="rtl" className=" flex flex-col gap-[5rem]">
            <div className="flex flex-col w-[30rem]">
              <RxHamburgerMenu className="text-[30px]"></RxHamburgerMenu>
              <h1 className="text-[25px] font-bold">ما هو التبرز المتبرز</h1>
              <p className="text-[20px]">
                التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات
                الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق
              </p>
            </div>
            <div className="flex flex-col w-[30rem]">
              <RxHamburgerMenu className="text-[30px]"></RxHamburgerMenu>
              <h1 className="text-[25px] font-bold">ما هو التبرز المتبرز</h1>
              <p className="text-[20px]">
                التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات
                الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <RxHamburgerMenu className="text-[30px]"></RxHamburgerMenu>
              <h1 className="text-[25px] font-bold">ما هو التبرز المتبرز</h1>
              <p className="text-[20px]">
                التبرز هي التي تقوم فيها الكائنات الحية بالتخلص من المخلفات
                الصلبة أو شبه الصلبة أو السائلة (البراز) عن طريق
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*lower-midsection*/}
      <div className="mt-[7rem] mr-10 mb-20">
        <p dir="rtl" className="text-[40px] font-bold">
          ازاي تستعمل سكولا؟
        </p>
        <div className="mr-5 mt-10 grid grid-cols-3">
          <div dir="rtl" className="flex flex-col">
            <h1 className="text-[26px] font-bold mb-5">نظام راقي وبسيط</h1>
            <p className="text-[20px] w-[25rem]">
              الحمار هو حيوان اليف من فصيلة الحصان ويوجد منه بصورة بريه فى
              الوديان ويستخدك للركوب وحمل المتاع ومنها من يعيش فى افريقيا واسيا
            </p>
          </div>
          <div dir="rtl" className="flex flex-col">
            <h1 className="text-[26px] font-bold mb-5">نظام راقي وبسيط</h1>
            <p className="text-[20px] w-[25rem]">
              الحمار هو حيوان اليف من فصيلة الحصان ويوجد منه بصورة بريه فى
              الوديان ويستخدك للركوب وحمل المتاع ومنها من يعيش فى افريقيا واسيا
            </p>
          </div>
          <div dir="rtl" className="flex flex-col">
            <h1 className="text-[26px] font-bold mb-5">نظام راقي وبسيط</h1>
            <p className="text-[20px] w-[25rem]">
              الحمار هو حيوان اليف من فصيلة الحصان ويوجد منه بصورة بريه فى
              الوديان ويستخدك للركوب وحمل المتاع ومنها من يعيش فى افريقيا واسيا
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-[#ff7000] h-[6rem] w-full">s</footer>
    </div>
  );
}
