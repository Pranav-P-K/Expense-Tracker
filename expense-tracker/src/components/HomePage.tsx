'use client'
import Image from "next/image";
import { useState } from "react";
import heroImage from '../../public/hero-image.svg'
import SignIn from "@/app/signin/page";
import SignUp from "@/app/signup/page";

type HomeProps = {
  isLogin: boolean;
};

const HomePage : React.FC<HomeProps> = ({ isLogin }) =>  {
  return (
    <div className="flex justify-center items-center gap-40">
      <div className="flex flex-col">
        <p className="text-6xl my-8">Start<br/> navigating<br/> your finances</p>
        <p className="text-2xl mb-8">Unlock the power of tracking your expenses<br/> 
          effortlessly with our easy-to-use application </p>

        <form className="space-y-4 text-white">
          <p className=" text-xl text-black flex justify-center"> {isLogin ? 'Stay Connected!' : 'Connect With Us!'}</p>
          {isLogin ? (<SignIn /> ) : (<SignUp />)}

          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
      </div>
      <div className="float-right mr-12 mt-20">
        <Image src={heroImage} alt="Phone" width={700} height={500} className="rounded-l-2xl"/>
      </div>
    </div>
  );
}

export default HomePage;