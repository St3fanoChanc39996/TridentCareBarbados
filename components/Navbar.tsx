
"use client";

//import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {

  return (
    <div className="flex flex-col w-[30%] h-screen bg-gray-700">
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white ">
        home
      </div>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white">
        about
      </div>
       <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white">
        dashboard
      </div>
      <p className="text-white font-semibold pl-4 ">Admin Only</p>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white">
        staff
      </div>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white">
        patients
      </div>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white ">
        inventory
      </div>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white">
        analytics
      </div>
      <p className="text-white font-semibold pl-4 ">Help Desk</p>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white ">
        chatbot
      </div>
      <div className="h-[6rem] w-full uppercase bg-gray-900 text-white flex items-center justify-center border-b border-white ">
        profile
      </div>
      
    </div>
  );
}