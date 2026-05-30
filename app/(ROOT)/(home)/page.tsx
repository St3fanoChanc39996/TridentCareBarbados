"use client";

import Navbar from "@/components/Navbar";

export default function HomePage() {

  return (
    <main className=" flex mx-4 mb-4 mt-4">
        <div className=" bg-blue-500 w-full h-screen rounded-2xl">
            <div className="flex flex-row">
              <Navbar/>
              <div className="pt-[2rem] px-[1rem] w-[70%]">
                <h1 className="font-bold text-4xl flex justify-center pb-[1rem]">Dashbaord</h1>
                <div className="grid grid-cols-4 gap-1">
                  <div className="bg-gray-500 w-[15rem] h-[8rem] rounded-2xl flex justify-center shadow-2xl/40 my-4 ">
                    <h1 className="font-semibold text-1xl">Daily Vistits</h1>
                  </div>
                  <div className="bg-gray-500 w-[15rem] h-[8rem] rounded-2xl flex justify-center shadow-2xl/40 my-4 ">
                    <h1 className="font-semibold text-1xl">Weekly Visits</h1>
                  </div>
                  <div className="bg-gray-500 w-[15rem] h-[8rem] rounded-2xl flex items-center justify-center shadow-2xl/40 my-4 border border-green-500">
                    <h1 className="font-semibold text-1xl">Add Data +</h1>
                  </div>
                  <div className="bg-gray-500 w-[15rem] h-[8rem] rounded-2xl flex items-center justify-center shadow-2xl/40 my-4 border border-red-500">
                    <h1 className="font-semibold text-1xl">Remove Data -</h1>
                  </div>

                </div>
                <div className=" grid grid-cols-4 gap-1">
                  <div className="bg-gray-500 w-[15rem] h-[15rem] rounded-2xl flex justify-center shadow-2xl/40 ">
                    <h1 className="font-semibold text-2xl">Staff</h1>
                  </div>
                  <div className="bg-gray-500 w-[15rem] h-[15rem] rounded-2xl flex justify-center shadow-2xl/40">
                    <h1 className="font-semibold text-2xl">Patients</h1>
                  </div>
                  <div className="bg-gray-500 w-[15rem] h-[15rem] rounded-2xl flex justify-center shadow-2xl/40">
                    <h1 className="font-semibold text-2xl">Inventory</h1>
                  </div>
                  <div className="bg-gray-500 w-[15rem] h-[15rem] rounded-2xl flex justify-center shadow-2xl/40">
                    <h1 className="font-semibold text-2xl">Analytics</h1>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
  );
}