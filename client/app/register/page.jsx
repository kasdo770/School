import Image from "next/image";
import { Flex, Text, Heading } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={"/register.jpg"} width={5000}
        height={5000}
        className="w-full z-[-8] absolute object-cover h-screen" />
      <container className="w-[619px] h-fit bg-white shadow-2xl rounded-2xl border-black border-[1px] z-[-2]">
        <div className="flex justify-center ">
          <h1 className="mt-[20px] text-2xl font-black	">اسكولا</h1>

        </div>
        <div className="flex items-end h-full  " >
          <Image src={"/bluewave.png"} width={5000} height={100} className="w-fill h-auto rounded-2xl mt-[0px]" />
        </div>


      </container>
    </div>
  )
}