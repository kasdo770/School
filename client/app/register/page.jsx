import Image from "next/image";
import { Flex, Text, Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={"/register.jpg"} width={5000}
        height={5000}
        className="w-full z-[-8] absolute object-cover h-screen" />
      <container className="w-[619px] h-[727px] bg-white shadow-2xl rounded-2xl border-black border-[1px]">
        <div className="flex items-end h-full" >
          <Image src={"/bluewave.png"} width={5000} height={100} className="w-full rounded-2xl" />
        </div>
      </container>
    </div>
  )
}