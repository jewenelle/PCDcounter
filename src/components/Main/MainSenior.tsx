"use client";

import AddB from "@/components/AddSen/AddB";
import AddC from "@/components/AddSen/AddC";
import AddD from "@/components/AddSen/AddD";
import AddM from "@/components/AddSen/AddM";
import Header from "@/components/Header/Header";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Home = () => {
  const [senCount, setSencount] = useState(() => {
    const senorCount = localStorage.getItem("seniorCounterNumber");
    return senorCount ? parseInt(senorCount, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("seniorCounterNumber", senCount.toString());
  }, [senCount]);
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center bg-gray-800 p-4 md:h-100">
        <Header />
        <hr className="w-1/3 h-2" />
        <div className="flex justify-between items-center w-1/3 h-8 p-10">
          <button
            className="text-[32px] text-white font-bold bg-slate-900 w-1/2 rounded-lg"
            onClick={() => setSencount((prevCount) => prevCount + 1)}
          >
            +
          </button>
          <p className="text-[32px] text-white">{senCount}</p>
        </div>
        <hr className="w-1/3 h-2 mb-2" />

        <div className="flex flex-col md:flex-row">
          <AddB />
          <AddM />
          <AddD />
          <AddC />
        </div>
        <p className="text-white text-[8px]">&copy;2024 archide.com</p>
      </div>
    </div>
  );
};

export default Home;
