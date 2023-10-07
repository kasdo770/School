import Image from "next/image";
import { MdOutlineNotStarted } from "react-icons/md";

export default function Home() {
  return (
    <div className="font-serif">
      {/*top*/}
      <Image
        src="https://4kwallpapers.com/images/wallpapers/splash-water-orange-background-macro-light-3840x2160-5732.jpg"
        width={5000}
        height={5000}
        alt="333"
        className="h-[35rem] w-[100%] absolute no-repeat object-fit top-0 z-[-1] brightness-[60%]"
      ></Image>
      {/*top-nav*/}

      <div
        dir="rtl"
        className="flex justify-between items-center mx-2 sm:mx-5 lg:mx-20 mt-4 text-[16px] sm:text-[18px] lg:text-[21px] text-white"
      >
        <p className="text-[24px] sm:text-[29px] lg:text-[35px] font-bold">
          عمار حمار
        </p>
        <div className="flex">
          <p className="ml-5 sm:ml-8">سحلب مجاني</p>
          <p className="ml-5 sm:ml-8">واجهة السحلب</p>
          <p>سحلب جود</p>
        </div>
      </div>
      {/*top-text*/}

      <div className="flex justify-center">
        <p className="font-medium text-[25px] md:text-[30px] lg:text-[40px] text-center mb-4 mt-[8rem] text-white">
          لمازا نحب الخرفان.؟
        </p>
      </div>
      <div className="flex justify-center">
        <p
          dir="rtl"
          className="text-[19px] md:text-[23px] text-center w-[80%] md:w-[60%] lg:w-[50%] text-white"
        >
          في حين أن الأغنام قد تبدو مثل حيوانات الماشية فارغة الرأس، فقد تم
          إجراء العديد من الدراسات لاكتشاف وإثبات صفات الخروف وعواطفها. الأغنام
          يحددان كيف تتصرحيوانات فريسة وحيوانات اجتماعية، هذان جانبان رئيسيان
          يحددان كيف تتصرف
        </p>
      </div>
      <div className="flex justify-center text-[45px] md:text-[60px] mt-6 text-white">
        <MdOutlineNotStarted></MdOutlineNotStarted>
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
