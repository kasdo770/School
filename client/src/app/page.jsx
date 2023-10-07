import Image from "next/image";

export default function Home() {
  return (
    <>
      {/*nav*/}

      <div className="flex justify-between items-center mx-20 my-4">
        <p className="text-xl">عمار حمار</p>
        <div className="flex">
          <p className="mr-5">ناف1111111</p>
          <p className="mr-5">ناف2222222</p>
          <p>ناف333333</p>
        </div>
      </div>

      {/*text*/}
      <div className="flex justify-center">
        <p className="text-xl text-center mb-4 mt-[8rem]">
          لمازا نحب الخرفان.؟
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-l text-center w-[50%]">
          في حين أن الأغنام قد تبدو مثل حيوانات الماشية فارغة الرأس، فقد تم
          إجراء العديد من الدراسات لاكتشاف وإثبات صفات الخروف وعواطفها. الأغنام
          حيوانات فريسة وحيوانات اجتماعية، هذان جانبان رئيسيان يحددان كيف تتصرف
          الأغنام وتستجيب لكل موقف. في هذه المقالة، سنقدم لمحة عامة عن السلوك
          الأساسي للخراف و صفات
        </p>
      </div>
    </>
  );
}
