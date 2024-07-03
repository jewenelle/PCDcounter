"use client";
import React, { useEffect, useState } from "react";
import AddB from "@/components/AddNID/AddB";
import Header from "@/components/Header/Header";
import AddM from "@/components/AddNID/AddM";
import AddD from "@/components/AddNID/AddD";
import AddC from "@/components/AddNID/AddC";

const Home = () => {
  const [natCount, setNatcount] = useState(() => {
    const senorCount = localStorage.getItem("nationalCounterNumber");
    return senorCount ? parseInt(senorCount, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("nationalCounterNumber", natCount.toString());
  }, [natCount]);

  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center bg-gray-800 p-4 md:h-100 h-full">
        <Header />
        <hr className="w-1/3 h-2" />
        <div className="flex justify-between items-center w-1/3 h-8 p-10 bg-slate-800">
          <button
            className="text-[32px] text-white font-bold bg-slate-900 w-1/2 rounded-lg"
            onClick={() => setNatcount((prevCount) => prevCount + 1)}
          >
            +
          </button>
          <p className="text-[32px] text-white">{natCount}</p>
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
