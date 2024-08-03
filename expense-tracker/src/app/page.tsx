'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import heroImage from '../../public/hero-image.svg'

export default function Home() {
  const [login,setLogin] = useState("login");
  return (
    <div className="flex justify-center items-center gap-40">
      <div className="float-left">
        <p className="text-6xl ml-36 mt-20 mb-8">Start<br/> navigating<br/> your finances</p>
        <p className="text-2xl ml-36">Unlock the power of tracking your expenses<br/> 
          effortlessly with our easy-to-use application </p>
      </div>
      <div className="float-right mr-12 mt-20">
        <Image src={heroImage} alt="Phone" width={700} height={500} className="rounded-l-2xl"/>
      </div>
    </div>
  );
}
